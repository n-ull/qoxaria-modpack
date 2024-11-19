ServerEvents.recipes(e => {
    e.recipes.create.mixing(Item.of('qoxaria:raw_qoxilite', 2), ['netherite_scrap', 'mekanism:osmium_ore']).superheated();

    e.smelting(Item.of('qoxaria:ingot_qoxilite'), 'qoxaria:raw_qoxilite').xp(0.7);
    e.recipes.create.crushing(Item.of('qoxaria:dust_qoxilite', 2), 'qoxaria:raw_qoxilite');
    e.recipes.create.crushing(Item.of('qoxaria:dust_qoxilite', 2), 'qoxaria:ingot_qoxilite');

    e.recipes.mekanism.crushing(Item.of('qoxaria:dust_qoxilite', 2), 'qoxaria:raw_qoxilite');
    e.recipes.mekanism.crushing(Item.of('qoxaria:dust_qoxilite', 2), 'qoxaria:ingot_qoxilite');

    e.recipes.mekanism.metallurgic_infusing(Item.of('qoxaria:infused_qoxilite'), 'qoxaria:ingot_qoxilite', {
        infuse_type: 'mekanism:redstone',
        amount: 10
    });

    /* Mekanism Generators */
    e.shaped('mekanismgenerators:wind_generator', [
        ' A ',
        'ABA',
        'CDC'
    ], {
        A: 'mekanism:ingot_osmium',
        B: 'qoxaria:infused_qoxilite',
        C: 'mekanism:energy_tablet',
        D: 'mekanism:basic_control_circuit'
    });

    e.shaped('mekanismgenerators:bio_generator', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'minecraft:redstone',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:bio_fuel',
        D: 'mekanism:basic_control_circuit',
        E: 'minecraft:iron_ingot',
        F: 'qoxaria:infused_qoxilite'
    });

    e.shaped('mekanismgenerators:gas_burning_generator', [
        'ABA',
        'CDC',
        'AEA'
    ],{
        A: 'mekanism:ingot_osmium',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:steel_casing',
        D: 'mekanism:electrolytic_core',
        E: 'qoxaria:infused_qoxilite'
    });

    e.shaped('mekanismgenerators:rotational_complex', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'mekanism:ingot_steel',
        B: 'mekanism:alloy_infused',
        C: 'mekanism:advanced_control_circuit',
        D: 'qoxaria:infused_qoxilite'
    });

    e.shaped('mekanismgenerators:fusion_reactor_controller', [
        'ABA',
        'CDC',
        'CCC'
    ], {
        A: 'mekanism:ultimate_control_circuit',
        B: 'qoxaria:infused_qoxilite',
        C: 'mekanismgenerators:fusion_reactor_frame',
        D: 'mekanism:basic_chemical_tank'
    });

    e.shaped('mekanismgenerators:solar_generator', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'mekanismgenerators:solar_panel',
        B: 'mekanism:alloy_infused',
        C: 'qoxaria:infused_qoxilite',
        D: 'mekanism:ingot_osmium',
        E: 'mekanism:energy_tablet'
    });
});

