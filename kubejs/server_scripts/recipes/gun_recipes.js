ServerEvents.recipes(e => {
    e.recipes.create.pressing(Item.of('qoxaria:bronze_sheet', 2), '#forge:ingots/bronze');
    e.recipes.create.pressing(Item.of('qoxaria:casing', 8), '#forge:plates/bronze');

    e.shapeless('qoxaria:shell_casing', ['qoxaria:casing', 'minecraft:red_dye']);

    /* ammo */
    let simple_ammo = ['9mm', '45acp', '46', '357', '57', '50ae'];
    let medium_ammo = ['545', '556', '68', '762',];
    let hard_ammo = ['762x51', '338lapua', '50bmg'];

    simple_ammo.forEach(atype => {
        e.shapeless(`pointblank:ammo${atype}`, ['qoxaria:casing', 'minecraft:gunpowder']);
    });

    medium_ammo.forEach(atype => {
        e.shapeless(`pointblank:ammo${atype}`, ['qoxaria:casing', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder']);
    });

    hard_ammo.forEach(atype => {
        e.shapeless(`pointblank:ammo${atype}`, ['qoxaria:casing', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder']);
    });

    e.shapeless('pointblank:ammo12gauge', ['qoxaria:shell_casing', 'minecraft:gunpowder', 'minecraft:gunpowder']);
})