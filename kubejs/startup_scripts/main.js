StartupEvents.registry('item', e => {
    e.create('qoxaria:raw_qoxilite');
    e.create('qoxaria:qoxilite_ingot');

    e.create('qoxaria:qoxal');

    e.create('qoxaria:moqox')
        .rarity('uncommon');

    e.create('qoxaria:applecite_nugget')
        .rarity('rare');

    e.create('qoxaria:applecite')
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

    e.create('qoxaria:sugar_bag_tier1')
        .displayName('Sugar Bag I')
        .rarity('common')

    e.create('qoxaria:sugar_bag_tier2')
        .displayName('Sugar Bag II')
        .rarity('uncommon')

    e.create('qoxaria:sugar_bag_tier3')
        .displayName('Sugar Bag III')
        .rarity('rare')
})

StartupEvents.registry('block', e => {
    e.create('qoxaria:qoxilite_ore')
        .displayName('Qoxilite Ore')
        .soundType('stone')
        .hardness(5)
        .resistance(15.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool');
});


StartupEvents.modifyCreativeTab('kubejs:tab', e => {
    e.setDisplayName('Qoxaria')
})
