/* Qoxals to Hostile Mobs */

LootJS.modifiers(e => {
    const hostileEntityTypes = [
        "minecraft:zombie",
        "minecraft:blaze",
        "minecraft:cave_spider",
        "minecraft:creeper",
        "minecraft:enderman",
        "minecraft:endermite",
        "minecraft:evoker",
        "minecraft:guardian",
        "minecraft:illusioner",
        "minecraft:phantom",
        "minecraft:pillager",
        "minecraft:ravager",
        "minecraft:slime",
        "minecraft:spider",
        "minecraft:stray",
        "minecraft:strider",
        "minecraft:vindicator",
        "minecraft:warden",
        "minecraft:witch",
        "minecraft:husk",
        "minecraft:skeleton_horse",
        "minecraft:skeleton",
        "minecraft:zombie_villager",
        "minecraft:zombie_horse"
    ]
    e.addEntityLootModifier(hostileEntityTypes).killedByPlayer()
        .addLoot(
            LootEntry.of('qoxaria:qoxal').when(c =>
                c.randomChance(0.1))
        )
})
