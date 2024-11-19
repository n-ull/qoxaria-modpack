StartupEvents.registry('item', e => {
    /* Qoxilite */
    e.create('qoxaria:dust_qoxilite').displayName('Qoxilite Dust');
    e.create('qoxaria:raw_qoxilite').displayName('Raw Qoxilite');
    e.create('qoxaria:ingot_qoxilite').displayName('Qoxilite Ingot');
    e.create('qoxaria:infused_qoxilite').displayName('Infused Qoxilite');

    /* Economy */
    e.create('qoxaria:qoxal');
    e.create('qoxaria:moqox')
        .rarity('uncommon');

    /* Applecite */
    e.create('qoxaria:nugget_applecite')
        .displayName('Applecite Nugget')
        .rarity('rare');
    e.create('qoxaria:ingot_applecite')
        .displayName('Applecite Ingot')
        .rarity('rare');
    e.create('qoxaria:nebulosmanzanus')
        .rarity('epic')
        .tooltip('La manzana que lo domina todo. §6El fruto que comen los dioses.')
        .food(food => {
            food.hunger(6)
            food.saturation(1.2)
            food.alwaysEdible()
            food.effect('minecraft:regeneration', 200, 1, 1.0)
            food.effect('minecraft:resistance', 200, 1, 1.0)
            food.effect('minecraft:strength', 200, 1, 1.0)
        })
        .tag('curios:charm');

    /* Loot Bags */
    e.create('qoxaria:sugar_bag_common')
        .displayName('Sugar Bag I')
        .tooltip('A bag full of sugar... and nothing else, I swear.')
        .tag('qoxaria:loot_bag')
        .rarity('common');

    e.create('qoxaria:sugar_bag_rare')
        .displayName('Sugar Bag II')
        .tooltip('A bag full of powerful sugar. For the sweetest of the sweet.')
        .tag('qoxaria:loot_bag')
        .rarity('rare');

    e.create('qoxaria:sugar_bag_epic')
        .displayName('Sugar Bag III')
        .tooltip('A bag full of ultra powerful sugar. It\'s so sweet that it\'s almost dangerous.')
        .tag('qoxaria:loot_bag')
        .rarity('epic');

    e.create('qoxaria:lucky_bag_common')
        .displayName('Lucky Bag I')
        .tag('qoxaria:loot_bag')
        .rarity('rare');

    e.create('qoxaria:lucky_bag_rare')
        .displayName('Lucky Bag II')
        .tag('qoxaria:loot_bag')
        .texture('qoxaria:lucky_bag_common')
        .rarity('epic');

    e.create('qoxaria:egg_box_common')
        .displayName('Egg Box I')
        .tag('qoxaria:loot_bag')
        .rarity('rare');

    /* Casquillos  */
    e.create('qoxaria:casing')
        .displayName('Casing')
        .tag('qoxaria:casing');

    e.create('qoxaria:bronze_sheet')
        .displayName('Bronze Sheet')
        .tag('forge:plates')
        .tag('forge:plates/bronze');

    e.create('qoxaria:shell_casing')
        .displayName('Shell Casing')
        .tag('qoxaria:casing');

})

StartupEvents.modifyCreativeTab('kubejs:tab', e => {
    e.setDisplayName('Qoxaria')
})
