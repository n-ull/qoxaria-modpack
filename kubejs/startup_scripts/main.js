StartupEvents.registry('item', e => {
    e.create('qoxaria:qoxilite')
        .rarity('uncommon');

    e.create('qoxaria:qoxal')
        .rarity('common');

    e.create('qoxaria:moqox')
        .rarity('uncommon');

    e.create('qoxaria:applecite')
        .rarity('rare');

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

StartupEvents.modifyCreativeTab('kubejs:tab', e => {
    e.setDisplayName('Qoxaria')
})
