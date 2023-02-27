priority: 999

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	
	// Register new items here
	event.create('cryptopolis:ow_core').displayName('§a主世界核心§r').unstackable().glow(true).tooltip("§7解鎖主世界§r")
	event.create('cryptopolis:fungus_salad').displayName('蕈菇沙拉').food(food => {food.hunger(8).saturation(2).effect('fire_resistance', 20*90, 0, 1).alwaysEdible().eaten(ctx => {ctx.player.give('cryptopolis:non_flammable_bowl')})})
	event.create('cryptopolis:scorched_hammer', 'pickaxe').displayName('燒焦的鎚子').tooltip('§7第一版的粉碎機§r').tier('stone')
	event.create('cryptopolis:color_core_reagent').displayName('§4R§aG§1B§r 核心').tooltip("§4品§6嚐§e彩§a虹§r")
	event.create('cryptopolis:non_flammable_bowl').displayName('不會燒掉的碗').maxStackSize(16)
	event.create('cryptopolis:rainbow_shard').displayName('§4彩§6虹§e碎§a片§r').glow(true)
	event.create('cryptopolis:nether_shard').displayName('§5地獄§r碎片').glow(true)
	event.create('cryptopolis:lava_bowl').displayName('熔岩碗').unstackable()
	event.create('cryptopolis:hand_sieve').displayName('手持熔岩篩')
	event.create('cryptopolis:fluorite_shard').displayName('氟石碎片')
	event.create('cryptopolis:dust_of_dusts').displayName('寰宇之粉').glow(true).rarity('epic').tooltip("§7無盡之粒§r")
	event.create('cryptopolis:gear_of_gears').displayName('齒輪狂熱').glow(true).rarity('epic').tooltip("§7讓其他齒輪感到羞愧§r")
	event.create('cryptopolis:infinity').displayName('無盡之秘').glow(true).rarity('epic').tooltip("§1我§7聽到§1宇宙§7在§1對§7我歌唱...§r")
	event.create('cryptopolis:stick_bundle').displayName('木棒捆')
	event.create('cryptopolis:warped_wart').displayName('扭曲疙瘩')
	event.create('cryptopolis:null_ingot').displayName('空白錠')
	event.create('cryptopolis:null_shard').displayName('空白碎片')
	event.create('cryptopolis:null_dust').displayName('空白粉')
	event.create('cryptopolis:c_bucks').displayName('C幣')
	event.create('cryptopolis:mesh').displayName('篩網')
	event.create('cryptopolis:star').displayName('星')


	// scorched Items
	event.create('cryptopolis:scorched_leather').displayName('燒焦的皮革').texture("minecraft:item/leather").color(0, 0x3E651F).tooltip("§7或許我該清洗一下...§r")
    event.create('cryptopolis:scorched_saddle').displayName('燒焦的鞍').texture("minecraft:item/saddle").color(0, 0x3E651F).tooltip("§7或許我該清洗一下...§r")
    event.create('cryptopolis:scorched_apple').displayName('燒焦的蘋果').texture("minecraft:item/apple").color(0, 0x4A3F29).tooltip("§7或許我該清洗一下...§r")
	event.create('cryptopolis:scorched_carrot').displayName('燒焦的胡蘿蔔').texture("minecraft:item/carrot").color(0, 0x4A3F29).tooltip("§7或許我該清洗一下...§r")
	event.create('cryptopolis:scorched_beetroot').displayName('燒焦的甜菜根').texture("minecraft:item/beetroot").color(0, 0x4A3F29).tooltip("§7或許我該清洗一下...§r")
	event.create('cryptopolis:scorched_potato').displayName('燒焦的馬鈴薯').texture("minecraft:item/potato").color(0, 0x4A3F29).tooltip("§7或許我該清洗一下...§r")
	event.create('cryptopolis:scorched_pebble').displayName('燒焦的碎石').texture("minecraft:item/clay_ball").color(0, 0x2D2B27) // #2D2B27
	
})

StartupEvents.registry('block', event => {
	event.create('cryptopolis:null_shard_block')
		.displayName('空白碎片方塊')
		.material('glass')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_stone_tool')
		.fullBlock(true)
	
	event.create('cryptopolis:scorched_stone')
		.displayName('燒焦的石頭')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_wooden_tool')
		.material('stone')
		.fullBlock(true)

	event.create('cryptopolis:null_ore')
		.displayName('空白礦')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_stone_tool')
		.material('stone')
		.fullBlock(true)
	
	event.create('cryptopolis:null_block')
		.displayName('空白方塊')
		.material('metal')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.fullBlock(true)

	event.create('cryptopolis:block_of_blocks')
		.displayName('至尊方塊')
		.material('metal')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_diamond_tool')
		.fullBlock(true)

	event.create('cryptopolis:scorched_netherrack')
		.displayName('燒焦的地獄石')
		.material('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_stone_tool')
		.fullBlock(true)
})

StartupEvents.registry('fluid', event => {
	
	// Red Lava -> iron
	event.create('cryptopolis:red_lava').thickTexture(0xFF0000).bucketColor(0xFF0000).displayName('紅色熔岩')
	
	// Orange Lava -> copper
	event.create('cryptopolis:orange_lava').thickTexture(0xfc8c03).bucketColor(0xfc8c03).displayName('橙色熔岩')
	
	// green Lava -> uranium
	event.create('cryptopolis:green_lava').thickTexture(0x0a9400).bucketColor(0x0a9400).displayName('綠色熔岩')
	
	// yellow Lava -> gold
	event.create('cryptopolis:yellow_lava').thickTexture(0xfcd303).bucketColor(0xfcd303).displayName('黃色熔岩')
	
	// blue lava -> lead
	event.create('cryptopolis:blue_lava').thickTexture(0x0000FF).bucketColor(0x0000FF).displayName('藍色熔岩')
	
	// light blue lava -> tin
	event.create('cryptopolis:light_blue_lava').thickTexture(0x00ddff).bucketColor(0x00ddff).displayName('淺藍色熔岩')
	
	// cyan lava -> osmium
	event.create('cryptopolis:cyan_lava').thickTexture(0x02a1a1).bucketColor(0x02a1a1).displayName('青色熔岩')
	
	// white lava -> silver
	event.create('cryptopolis:white_lava').thickTexture(0xFFFFFF).bucketColor(0xFFFFFF).displayName('白色熔岩')
	
	// brown lava -> nickel
	event.create('cryptopolis:brown_lava').thickTexture(0x593000).bucketColor(0x593000).displayName('棕色熔岩')
	
	// black lava -> coal #292929
	event.create('cryptopolis:black_lava').thickTexture(0x292929).bucketColor(0x000000).displayName('黑色熔岩')
	
	// lime lava -> zinc
	event.create('cryptopolis:lime_lava').thickTexture(0x99ff00).bucketColor(0x99ff00).displayName('淺綠色熔岩')
	
	// purple lava -> redstone/quartz/glowstone
	event.create('cryptopolis:purple_lava').thickTexture(0x650094).bucketColor(0x650094).displayName('紫色熔岩')
	
	// pink lava -> aluminum
	event.create('cryptopolis:pink_lava').thickTexture(0xed539b).bucketColor(0xed539b).displayName('粉紅色熔岩')

	// Rainbow lava -> diamonds/emeralds/debris
	event.create('cryptopolis:rainbow_lava').displayName('彩虹熔岩').stillTexture('cryptopolis:block/rainbow_lava_still').flowingTexture('cryptopolis:block/rainbow_lava_flow').bucketColor(0xFF33FF)
	
	// Organic Water -> Seeds etc. #99FF00
	event.create('cryptopolis:organic_water').thinTexture(0x99FF00).bucketColor(0x99FF00).displayName('有機水')
	
	// Cleansing Water -> Cleaning Things #0066ff
	event.create('cryptopolis:cleansing_water').thinTexture(0x0066ff).bucketColor(0x0066ff).displayName('淨化水')

})

ItemEvents.modification(event => {
	// scorched items
	event.modify('cryptopolis:scorched_apple', item => {
        item.burnTime = 300
    })
	event.modify('cryptopolis:scorched_potato', item => {
        item.burnTime = 300
    })
	event.modify('cryptopolis:scorched_beetroot', item => {
        item.burnTime = 300
    })
	event.modify('cryptopolis:scorched_apple', item => {
        item.burnTime = 300
    })
	event.modify('minecraft:warped_fungus', item => {
        item.setFoodProperties(food => {
			food.hunger(1)
			food.saturation(0.5)
			food.effect('fire_resistance', 20*20, 0, 1)
			food.alwaysEdible()
			food.fastToEat()
		  })
    })
	event.modify('minecraft:crimson_fungus', item => {
        item.setFoodProperties(food => {
			food.hunger(1)
			food.saturation(0.5)
			food.effect('fire_resistance', 20*20, 0, 1)
			food.alwaysEdible()
			food.fastToEat()
		  })
    })

})

BlockEvents.modification(event => {

	event.modify('enderstorage:ender_chest', block => {
		block.destroySpeed = 0.8

	})
	
	event.modify('enderstorage:ender_tank', block => {
		block.destroySpeed = 0.8
	})
	
	event.modify('compactcrafting:field_projector', block => {
		block.destroySpeed = 0.3
	})
})
