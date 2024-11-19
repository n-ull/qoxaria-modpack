const $EnchantmentCategory = Java.loadClass('net.minecraft.world.item.enchantment.EnchantmentCategory');

StartupEvents.registry('enchantment', (e) => {

    e.create('qoxaria:infinite_block_enchantment')
    .minLevel(1)
    .maxLevel(1)
    .displayName('Infinite Block')
    .veryRare()
    .canEnchant(s => s.isBlock());

});

StartupEvents.registry('block', (e) => {
    e.create('qoxaria:infinite_block')
    .displayName('Infinite Block')
    .tagBlock('qoxaria:infinite_block')
    .model('minecraft:block/dirt');
})