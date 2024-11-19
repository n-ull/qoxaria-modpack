BlockEvents.placed(e => {
    if (e.player.mainHandItem.nbt.Enchantments.some(ec => ec.id == 'qoxaria:infinite_block_enchantment')) {
        e.player.tell('You placed a block with the infinite block enchantment!');
        e.player.give(e.player.mainHandItem.withCount(0))
        e.block.item.nbt = { tag: { display: { Name: '{"text":"Infinite Block"}' } } };
    }
})
