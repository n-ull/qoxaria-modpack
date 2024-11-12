ServerEvents.recipes(e => {
    e.remove({ mod: 'pointblank' });
    e.remove({ mod: 'waterframes' });

    let remove_recipes = ['mekaweapons:bow_riser', 'mekaweapons:mekatana', 'mekanism:atomic_disassembler', 'ironfurnaces:rainbow_core', 'mekanism:teleportation_core'];

    remove_recipes.forEach(recipe => {
        e.remove(recipe);
    });

    /* Basic Control Circuit */
    e.remove({ output: 'mekanism:basic_control_circuit' });
    e.recipes.mekanism.metallurgic_infusing('mekanism:basic_control_circuit', 'qoxaria:raw_qoxilite', {
        infuse_type: 'mekanism:redstone',
        amount: 10
    });

    /* Meka Bow Riser */
    e.shaped(Item.of('mekaweapons:bow_riser', 1), [
        'ABA',
        'CDC'
    ], {
        A: 'mekanism:ultimate_control_circuit',
        B: 'qoxaria:applecite_nugget',
        C: 'mekanism:ingot_refined_obsidian',
        D: 'mekanism:alloy_atomic'
    });

    /* Meka-Tana */
    e.shaped(Item.of('mekaweapons:mekatana', 1), [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'mekanism:ultimate_control_circuit',
        B: 'mekaweaponsz:katana_blade',
        C: 'mekanism:hdpe_sheet',
        D: 'qoxaria:applecite_nugget',
        E: 'mekanism:pellet_polonium',
        F: 'mekanism:basic_induction_cell'
    })

    /* Atomic Disassembler */
    e.shaped(Item.of('mekanism:atomic_disassembler', 1), [
        'ABA',
        'ACA',
        ' D '
    ], {
        A: 'mekanism:alloy_infused',
        B: 'mekanism:energy_tablet',
        C: 'qoxaria:applecite_nugget',
        D: 'mekanism:ingot_refined_obsidian'
    })

    /* Iron Furnaces: Rainbow Core */
    e.shaped(Item.of('ironfurnaces:rainbow_core', 1), [
        'ABC',
        'DED',
        'FGH'
    ], {
        A: 'minecraft:red_stained_glass',
        B: 'minecraft:orange_stained_glass',
        C: 'minecraft:yellow_stained_glass',
        D: 'ironfurnaces:netherite_furnace',
        E: 'qoxaria:applecite_nugget',
        F: 'minecraft:blue_stained_glass',
        G: 'minecraft:purple_stained_glass',
        H: 'minecraft:magenta_stained_glass'
    });

    /* Teleportation Core */
    e.shaped(Item.of('mekanism:teleportation_core', 1), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:lapis_lazuli',
        B: 'mekanism:alloy_atomic',
        C: 'minecraft:gold_ingot',
        D: 'qoxaria:applecite_nugget'
    });

});

ServerEvents.entityLootTables(e => {

    let qoxal_tier1_mobs = [
        'zombie',
        'skeleton',
        'pillager',
        'husk',
        'wither_skeleton',
        'creeper',
        'spider',
        'cave_spider',
        'stray',
        'drowned',
        'enderman',
        'witch'
    ];

    qoxal_tier1_mobs.forEach(mob => {
        e.modifyEntity(mob, t => {
            t.addPool(p => {
                p.addItem('qoxaria:qoxal', 1, [1, 2]).killedByPlayer().randomChance(0.01);
            });
        });
    });

    e.modifyEntity('ender_dragon', t => {
        t.addPool(p => {
            p.addItem('qoxaria:qoxal', 1, [18, 64]).killedByPlayer();
        })
    })
});

