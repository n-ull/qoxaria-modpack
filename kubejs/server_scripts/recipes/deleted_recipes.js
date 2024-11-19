ServerEvents.recipes(e => {
    // e.remove({ mod: 'pointblank' }); // remove guns and ammo recipes
    // e.remove({ mod: 'mekanismgenerators' }); // remove mekanism generator recipes

    let remove_recipes = [
        'mekaweapons:bow_riser',
        'mekaweapons:mekatana',
        'mekanism:atomic_disassembler',
        'ironfurnaces:rainbow_core',
        'mekanism:teleportation_core',
        'mekanismgenerators:solar_generator',
        'mekanismgenerators:wind_generator',
        'mekanismgenerators:bio_generator',
        'mekanismgenerators:gas_burning_generator',
        'mekanismgenerators:rotational_complex',
        'mekanismgenerators:fusion_reactor_controller',
    ];

    remove_recipes.forEach(recipe => {
        e.remove({ output: recipe });
    });
});
