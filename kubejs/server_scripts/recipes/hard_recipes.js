ServerEvents.recipes(e => {
    /* Meka Bow Riser */
    e.shaped(Item.of('mekaweapons:bow_riser', 1), [
        'ABA',
        'CDC'
    ], {
        A: 'mekanism:ultimate_control_circuit',
        B: 'qoxaria:nugget_applecite',
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
        D: 'qoxaria:nugget_applecite',
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
        C: 'qoxaria:nugget_applecite',
        D: 'mekanism:ingot_refined_obsidian'
    })

    /* Teleportation Core */
    e.shaped(Item.of('mekanism:teleportation_core', 1), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:lapis_lazuli',
        B: 'mekanism:alloy_atomic',
        C: 'minecraft:gold_ingot',
        D: 'qoxaria:nugget_applecite'
    });


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
        E: 'qoxaria:nugget_applecite',
        F: 'minecraft:blue_stained_glass',
        G: 'minecraft:purple_stained_glass',
        H: 'minecraft:magenta_stained_glass'
    });

})