// priority: 0


Ponder.tags((event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("cryptopolis:cryptopolis_basics", "cryptopolis:hand_sieve", "Cryptopolis 101", "Ponder About The Basics Of Cryptopolis!", [
        // some default items
        "cryptopolis:hand_sieve",
        "cryptopolis:scorched_hammer",
        "cryptopolis:color_core_reagent"
    ]);

    event.createTag("cryptopolis:naturesaura_basics", "naturesaura:nature_altar", "Nature's Aura Basics", "Ponder About Nature's Aura Structures", [
        // some default items
        "naturesaura:nature_altar",
        "naturesaura:offering_table",
        "naturesaura:wood_stand"
        //"naturesaura:wood_stand"
    ]);

});

Ponder.registry((event) => {
    event.create("cryptopolis:scorched_hammer").scene("scorched_hammer_breaking", "Breaking With Scorched Hammer", (scene, util) => {
        
        scene.showStructure();
        
        scene.idle(20);

        const centerBlockPos = util.grid.at(2, 0, 2);
        const centerTop = util.vector.topOf(centerBlockPos);

        scene.world.setBlock(centerTop, "cryptopolis:scorched_stone", true);

        scene.idle(20);

        scene.text(60, "The Scorched Hammer Can Be Used As A Pickaxe (Level Stone)", [2.0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();

        scene.idle(20);

        scene.showControls(60, [2.5, 3, 2.5], "down").leftClick().withItem("cryptopolis:scorched_hammer")
        
        scene.idle(20);

        for (let x = 0; x < 10; x++) {
            scene.world.incrementBlockBreakingProgress([2, 1, 2])
            scene.idle(4)
        }

        
        scene.world.createItemEntity(centerTop.add(0, 1, 0), util.vector.of(0.07, 0.4, 0), "cryptopolis:scorched_pebble");
        scene.world.createItemEntity(centerTop.add(0, 1, 0), util.vector.of(-0.07, 0.4, 0), "cryptopolis:scorched_pebble");
        scene.world.createItemEntity(centerTop.add(0, 1, 0), util.vector.of(-0.07, 0.4, -0.07), "cryptopolis:scorched_pebble");
        scene.world.createItemEntity(centerTop.add(0, 1, 0), util.vector.of(0, 0.4, -0.07), "cryptopolis:scorched_pebble");
        
        //scene.world.modifyBlock([2, 1, 2], () => Block.id("minecraft:air"), true)
        
        scene.idle(60);
    });

    event.create("naturesaura:wood_stand").scene("ritual_of_the_forest","Ritual Of The Forest Structure","cryptopolis:ritual_forest",(scene, util) => {
        // your scene code here
        scene.showBasePlate();
        scene.idle(40);
        scene.showStructure();
        scene.idle(60);
        
    });

});

JEIEvents.information(event => {
    event.addItem('cryptopolis:null_ore', ['對著世界上的石頭使用空白粉，能夠創造出空白礦'])

    event.addItem('botanypots:terracotta_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypots:terracotta_hopper_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypots:concrete_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypots:concrete_hopper_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypots:glazed_terracotta_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypots:glazed_terracotta_hopper_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])

    event.addItem('botanypotstiers:elite_terracotta_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:elite_terracotta_hopper_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:elite_concrete_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:elite_concrete_hopper_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:elite_glazed_terracotta_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:elite_glazed_terracotta_hopper_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])

    event.addItem('botanypotstiers:ultra_terracotta_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:ultra_terracotta_hopper_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:ultra_concrete_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:ultra_concrete_hopper_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:ultra_glazed_terracotta_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:ultra_glazed_terracotta_hopper_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])

    event.addItem('botanypotstiers:creative_terracotta_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:creative_terracotta_hopper_botany_pot', ['使用不同顏色的釉陶作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:creative_concrete_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypotstiers:creative_concrete_hopper_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypots:creative_glazed_terracotta_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])
    event.addItem('botanypots:creative_glazed_terracotta_hopper_botany_pot', ['使用不同顏色的混凝土作為材料，便能合成出不同顏色的植物盆'])

})

JEIEvents.hideItems(event => {
    event.hide('botanypots:white_terracotta_botany_pot')
    
    function noMorePots (colours) {

        event.hide(`botanypots:${colours}_terracotta_botany_pot`)
        event.hide(`botanypots:${colours}_terracotta_hopper_botany_pot`)
        event.hide( `botanypots:${colours}_concrete_botany_pot`)
        event.hide(`botanypots:${colours}_concrete_hopper_botany_pot`)
        event.hide(`botanypots:${colours}_glazed_terracotta_botany_pot`)
        event.hide(`botanypots:${colours}_glazed_terracotta_hopper_botany_pot`)

        event.hide(`botanypotstiers:elite_${colours}_terracotta_botany_pot`)
        event.hide(`botanypotstiers:elite_${colours}_terracotta_hopper_botany_pot`)
        event.hide(`botanypotstiers:elite_${colours}_concrete_botany_pot`)
        event.hide(`botanypotstiers:elite_${colours}_concrete_hopper_botany_pot`)
        event.hide(`botanypotstiers:elite_${colours}_glazed_terracotta_botany_pot`)
        event.hide(`botanypotstiers:elite_${colours}_glazed_terracotta_hopper_botany_pot`)
            
        event.hide(`botanypotstiers:ultra_${colours}_terracotta_botany_pot`)
        event.hide(`botanypotstiers:ultra_${colours}_terracotta_hopper_botany_pot`)
        event.hide(`botanypotstiers:ultra_${colours}_concrete_botany_pot`)
        event.hide(`botanypotstiers:ultra_${colours}_concrete_hopper_botany_pot`)
        event.hide(`botanypotstiers:ultra_${colours}_glazed_terracotta_botany_pot`)
        event.hide(`botanypotstiers:ultra_${colours}_glazed_terracotta_hopper_botany_pot`)
        
        event.hide(`botanypotstiers:creative_${colours}_terracotta_botany_pot`)
        event.hide(`botanypotstiers:creative_${colours}_terracotta_hopper_botany_pot`)
        event.hide(`botanypotstiers:creative_${colours}_concrete_botany_pot`)
        event.hide(`botanypotstiers:creative_${colours}_concrete_hopper_botany_pot`)
        event.hide(`botanypotstiers:creative_${colours}_glazed_terracotta_botany_pot`)
        event.hide(`botanypotstiers:creative_${colours}_glazed_terracotta_hopper_botany_pot`)
    }
    
noMorePots ('white')
noMorePots ('light_gray')
noMorePots ('gray')
noMorePots ('black')
noMorePots ('red')
noMorePots ('orange')
noMorePots ('yellow')
noMorePots ('lime')
noMorePots ('green')
noMorePots ('light_blue')
noMorePots ('cyan')
noMorePots ('blue')
noMorePots ('purple')
noMorePots ('magenta')
noMorePots ('pink')
noMorePots ('brown')

})

