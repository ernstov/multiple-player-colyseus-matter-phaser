const tankStats = {
    "Basic": {
        upgradesFrom: "Unknown",
        level: 1,
        turrets: 1,
        bullets: 1,
        bulletDamage: 3,
        bulletPenatration: 3,
        bulletSpeed: 15,
        reload: 5,
        healthRegen: 1,
        maxHealth: 51,
        bodyDamage: 1,
        movementSpeed: 3,
        accuracy: 1
    },

    "StormBasic": {
        upgradesFrom: "Basic",
        level: 105,
        turrets: 1,
        bullets: 70,
        bulletDamage: 10,
        bulletPenatration: 10,
        bulletSpeed: 35,
        reload: 14,
        healthRegen: 30,
        maxHealth: 150,
        bodyDamage: 30,
        movementSpeed: 30,
        accuracy: "Whirl Pool Life Span x 100",
        sight: 5,
        autoFire: true,
        description: "Two pieces of info here. Don't Get near this tank or else it will bullet storm you. It's bullets are mini octo tanks and will chase you while bullet storming you with huge amounts of attackers due to their 300 second life span so you can onl win by one shotting this tank"
    },

    "UltraBasic": {
        upgradesFrom: "Basic",
        level: 105,
        turrets: 1,
        bullets: 10,
        bulletDamage: 100,
        bulletPenatration: 100,
        bulletSpeed: 35,
        reload: 14,
        healthRegen: 30,
        maxHealth: 150,
        bodyDamage: 30,
        movementSpeed: 30,
        accuracy: "Target Chaser Life Span x 75",
        sight: 5,
        autoFire: true,
        description: "One piece of info here. This tank is OP any tank that comes into to its sight will get chased by 3 bullets will home on to the most dangerest thing in sight the 4 other bullets will find the other objects using this list(1. lv 105 tank, 2. Mothership, lv 45 tank(Drone, Sniper Branch, Destroyer Branch, Rammer, Random), lv 30 tank(Drone, Sniper Branch, Destroyer Branch, Rammer, Random), lv 15 tank(Drone, Sniper Branch, Destroyer Branch, Rammer, Random). Notice that basics won't get killed by this tank but basics can't kill this tank either.)"
    },

    "SpamBasic": {
        upgradesFrom: "Basic",
        level: 105,
        turrets: 1,
        bullets: 100,
        bulletDamage: 100,
        bulletPenatration: 100,
        bulletSpeed: 35,
        reload: 12,
        healthRegen: 30,
        maxHealth: 150,
        bodyDamage: 30,
        movementSpeed: 30,
        accuracy: "Life Span x Infinity",
        sight: 5,
        autoFire: true,
        description: "Just Spam! This tank just spams OP bullets with Infinite Life Span."
    },

    "ArenaCloser": {
        upgradesFrom: "Basic",
        level: 270,
        turrets: 1,
        bullets: 1,
        bulletDamage: 196,
        bulletPenatration: Infinity,
        bulletSpeed: 35,
        reload: 14,
        healthRegen: Infinity,
        maxHealth: Infinity - 1,
        bodyDamage: Infinity,
        movementSpeed: 30,
        accuracy: "Life Span x Infinity",
        sight: 5,
        autoFire: true,
        description: "ArEnA cLoSeR iS oP l BoZo PlUs RaTiO l BoZo<A><B><C><D><E><F><G><H><I><J><K><L><M><N><O><P><Q><R><S><T><U><V><W><X><Y><Z>."
    },

    "TheGodOfTanks": {
        upgradesFrom: "Basic",
        level: 995,
        turrets: 1,
        bullets: 1,
        bulletDamage: Infinity,
        bulletPenatration: Infinity,
        bulletSpeed: 100,
        reload: 15,
        healthRegen: Infinity,
        maxHealth: Infinity,
        bodyDamage: Infinity,
        movementSpeed: 100,
        accuracy: "Life Span x Infinity",
        sight: 10,
        autoFire: true,
        description: "ArenaCLoser Destrution."
    },
    "BasicRammer": {
        upgradesFrom: "Basic",
        level: 15,
        turrets: 0,
        bullets: 0,
        bulletDamage: 0,
        bulletPenatration: 0,
        bulletSpeed: 0,
        reload: 0,
        healthRegen: 5,
        maxHealth: 51,
        bodyDamage: 10,
        movementSpeed: 4,
        accuracy: 0
    },

    "BasicDroneUser": {
        upgradesFrom: "Basic",
        level: 15,
        turrets: 1,
        bullets: 4,
        ammunition: "drones",
        bulletDamage: 2,
        bulletPenatration: 8,
        bulletSpeed: 13,
        reload: 0.2,
        healthRegen: 5,
        maxHealth: 51,
        bodyDamage: 5,
        movementSpeed: 4,
        accuracy: 1
    },

    "Overseer": {
        upgradesFrom: "BasicDroneUser",
        level: 30,
        turrets: 2,
        bullets: 8,
        ammunition: "drones",
        bulletDamage: 5,
        bulletPenatration: 13,
        bulletSpeed: 15,
        reload: 0.3,
        healthRegen: 5,
        maxHealth: 53,
        bodyDamage: 5,
        movementSpeed: 8,
        accuracy: 1
    },

    "Overlord": {
        upgradesFrom: "Overseer",
        level: 45,
        turrets: 4,
        bullets: 16,
        ammunition: "drones",
        bulletDamage: 12,
        bulletPenatration: 17,
        bulletSpeed: 19,
        reload: 0.7,
        healthRegen: 9,
        maxHealth: 57,
        bodyDamage: 7,
        movementSpeed: 12,
        accuracy: 1
    },

    "Mothership": {
        upgradesFrom: "Overlord",
        level: 135,
        turrets: 16,
        bullets: 100,
        ammunition: "drones",
        bulletDamage: 50,
        bulletPenatration: 50,
        bulletSpeed: 50,
        reload: 14,
        healthRegen: 10,
        maxHealth: 3000,
        bodyDamage: 50,
        movementSpeed: 50,
        accuracy: 1,
        sight: 6,
    },



    "Sniper": {
        upgradesFrom: "Basic",
        level: 15,
        turrets: 1,
        bullets: 1,
        bulletDamage: 4,
        bulletPenatration: 4,
        bulletSpeed: 20,
        reload: 3,
        healthRegen: 4,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 4,
        accuracy: 1
    },

    "Assassin": {
        upgradesFrom: "Sniper",
        level: 30,
        turrets: 1,
        bullets: 1,
        bulletDamage: 7,
        bulletPentration: 7,
        bulletSpeed: 25,
        reload: 6,
        healthRegen: 7,
        maxHealth: 57,
        bodyDamage: 7,
        movementSpeed: 9,
        accuracy: 1,
        sight: 2.5,
        desription: "This is a tank from diep.io it's bullet damage, pentration and speed are the same as the Spam-Shooter. This tank can counter the One-Shot-Wonder tank with it's movement speed + high sight range and shoot a bunch of bullets at the enemy most likely killing it."
    },

    "One-Shot-Wonder": {
        upgradesFrom: "Assassin",
        level: 45,
        turrets: 1,
        bullets: 1,
        bulletDamage: 77,
        bulletPentration: 77,
        bulletSpeed: 77,
        reload: 3,
        healthRegen: 1,
        maxHealth: 20,
        bodyDamage: 1,
        movementSpeed: 2,
        accuracy: 1,
        sight: 4,
        desription: "My own design! This is deadly and long range combat but with it's low hp and regen suck at melee/close combat. Best used at ambushing enemys with its long sight range and deadly bullets though it can be countered by a bullet spammer or realy fast rammer seeing as it's reload is low."
    },

    "Spam-Shooter AKA Pea-Shooter": {
        upgradesFrom: "Assassin",
        level: 45,
        turrets: 1,
        bullets: 10,
        bulletDamage: 7,
        bulletPentration: 7,
        bulletSpeed: 25,
        reload: 10,
        healthRegen: 10,
        maxHealth: 60,
        bodyDamage: 10,
        movementSpeed: 10,
        accuracy: 1,
        sight: 1.5,
        desription: "My own design! This tank was inspired by the repeater but with more bullets from plants vs zombies 2. This tank will shoot 10 medium strenth bullets for each time it's reload time ends. This tank is a bullet spammer and a good choice for newbs when the playing this game. This tank has a unique abilty: Survive for over 5 minutes and you're bullet stats change and become stronger."
    },

    "Twin-Destroyer": {
        upgradesFrom: "Assassin",
        level: 45,
        turrets: 2,
        bullets: 1,
        bulletDamage: 33,
        bulletPentration: 33,
        bulletSpeed: 33,
        reload: 14,
        healthRegen: 7,
        maxHealth: 7,
        bodyDamage: 7,
        movementSpeed: 30,
        accuracy: 1,
        sight: 3,
        desription: "My own design! Design from Copter.io Dual Gun Sniper. With it's super duper high reload this tank has highest DPS of all the tanks released in this game but it also has the lowest hp of all tanks! Best used at long range or against low DPS tank or even One-Shot-Wonder tank(due to it's high movementSpeed)."
    },

    "Smasher": {
        upgradesFrom: "BasicRammer",
        level: 30,
        turrets: 0,
        bullets: 0,
        bulletDamage: 0,
        bulletPenatration: 0,
        bulletSpeed: 0,
        reload: 0,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 20,
        movementSpeed: 9,
        accuracy: 0,
        sight: 1
    },

    "Spike": {
        upgradesFrom: "Smasher",
        level: 45,
        turrets: 0,
        bullets: 0,
        bulletDamage: 0,
        bulletPenatration: 0,
        bulletSpeed: 0,
        reload: 0,
        healthRegen: 12,
        maxHealth: 54,
        bodyDamage: 40,
        movementSpeed: 12,
        accuracy: 0,
        sight: 2
    },

    "Chaser": {
        upgradesFrom: "Smasher",
        level: 45,
        turrets: 0,
        bullets: 0,
        bulletDamage: 0,
        bulletPenatration: 0,
        bulletSpeed: 0,
        reload: 0,
        healthRegen: 10,
        maxHealth: 60,
        bodyDamage: 30,
        movementSpeed: 20,
        accuracy: 0,
        sight: 2.5
    },

    "Machine-Gun": {
        upgradesFrom: "Basic",
        level: 15,
        turrets: 1,
        bullets: 2,
        bulletDamage: 3,
        bulletPenatration: 4,
        bulletSpeed: 19,
        reload: 10,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 4,
        accuracy: 0.3,
        sight: 1
    },

    "Destroyer": {
        upgradesFrom: "Machine-Gun",
        level: 30,
        turrets: 1,
        bullets: 1,
        bulletDamage: 30,
        bulletPenatration: 30,
        bulletSpeed: 15,
        reload: 7,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 4,
        accuracy: 1,
        sight: 1.5
    },

    "Dayeeter": {
        upgradesFrom: "Machine-Gun",
        level: 45,
        turrets: 1,
        bullets: 1,
        bulletDamage: 1,
        bulletPenatration: 1,
        bulletSpeed: 1,
        reload: 15,
        healthRegen: 100,
        maxHealth: 25,
        bodyDamage: 25,
        movementSpeed: 100,
        accuracy: 1,
        sight: 2
    },

    "Annihilator": {
        upgradesFrom: "Destroyer",
        level: 45,
        turrets: 1,
        bullets: 1,
        bulletDamage: 5,
        bulletPenatration: 5,
        bulletSpeed: 5,
        reload: 14.5,
        healthRegen: 15,
        maxHealth: 70,
        bodyDamage: 10,
        movementSpeed: 20,
        accuracy: 1,
        sight: 2,
        description: "The Ramming Destroyer. It's reload is the highest in game but the bullet stats are weak. DPS is really low."
    },

    "Twestroyer": {
        upgradesFrom: "Destroyer",
        level: 45,
        turrets: 1,
        bullets: 2,
        bulletDamage: 25,
        bulletPenatration: 25,
        bulletSpeed: 20,
        reload: 7,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 4,
        accuracy: 1,
        sight: 2,
        desription: "Two epic bullets that can take out the Annihilator's Bullet(if both hit) and live. Each bullet is nearly as strong as the destroyer's meaning that it can easily counter most bullets from the destroyer branch. The ousider being Destrutor(60 damage and pentration). So if you are going to take out enemy's in close range you should pick this tank."
    },

    "Destructor": {
        upgradesFrom: "Destroyer",
        level: 45,
        turrets: 1,
        bullets: 1,
        bulletDamage: 60,
        bulletPenatration: 60,
        bulletSpeed: 35,
        reload: 5,
        healthRegen: 10,
        maxHealth: 50,
        bodyDamage: 10,
        movementSpeed: 10,
        accuracy: 1,
        sight: 2,
        desription: "Tank Vs Destructor = Destructor bullet hit's enemy while taking damage by the enemy bullets touch's enemy. BOOM! One Shot One Kill! Yup that is true! This tank's bullets are the strongest of the destroyer branch this can be an effective rammer too! But the enemy has to have less than half of it's hp. You can't ram a one shot wonder tank due to it's powerful bullets. This tank is best used for taking pop shots at enemys."
    },
    "Twin": {
        upgradesFrom: "Basic",
        level: 15,
        turrets: 2,
        bullets: 1,
        bulletDamage: 2,
        bulletPenatration: 1,
        bulletSpeed: 19,
        reload: 9,
        healthRegen: 5,
        maxHealth: 50,
        bodyDamage: 4,
        movementSpeed: 5,
        accuracy: 1,
        sight: 1,
    },

    "Triple-Shot": {
        upgradesFrom: "Twin",
        level: 30,
        turrets: 3,
        bullets: 1,
        bulletDamage: 6,
        bulletPenatration: 2,
        bulletSpeed: 23,
        reload: 9,
        healthRegen: 6,
        maxHealth: 54,
        bodyDamage: 8,
        movementSpeed: 9,
        accuracy: 1,
        sight: 1.5,
    },

    "Triplet": {
        upgradesFrom: "Triple-Shot",
        level: 45,
        turrets: 3,
        bullets: 1,
        bulletDamage: 6,
        bulletPenatration: 6,
        bulletSpeed: 25,
        reload: 13,
        healthRegen: 6,
        maxHealth: 54,
        bodyDamage: 8,
        movementSpeed: 9,
        accuracy: 1,
        sight: 2,
    },

    "Penta-Shot": {
        upgradesFrom: "Triple-Shot",
        level: 45,
        turrets: 5,
        bullets: 1,
        bulletDamage: 5,
        bulletPenatration: 6,
        bulletSpeed: 28,
        reload: 13,
        healthRegen: 7,
        maxHealth: 58,
        bodyDamage: 12,
        movementSpeed: 13,
        accuracy: 1,
        sight: 2,
    },

    "Spread-Shot": {
        upgradesFrom: "Triple-Shot",
        level: 45,
        turrets: 11,
        bullets: 1,
        bulletDamage: 4,
        bulletPenatration: 4,
        bulletSpeed: 28,
        reload: 10,
        healthRegen: 7,
        maxHealth: 58,
        bodyDamage: 12,
        movementSpeed: 13,
        accuracy: 1,
        sight: 2,
    },


    "Flank-Guard": {
        upgradesFrom: "Basic",
        level: 15,
        turrets: 2,
        bullets: 1,
        bulletDamage: 9,
        bulletPenatration: 5,
        bulletSpeed: 19,
        reload: 9,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 9,
        accuracy: 1,
        sight: 1
    },

    "Tri-Angle": {
        upgradesFrom: "Flank-Guard",
        level: 30,
        turrets: 3,
        bullets: 1,
        bulletDamage: 9,
        bulletPenatration: 5,
        bulletSpeed: 19,
        reload: 11,
        healthRegen: 11,
        maxHealth: 56,
        bodyDamage: 6,
        movementSpeed: 11,
        accuracy: 1,
        sight: 2
    },

    "Booster": {
        upgradesFrom: "Tri-Angle",
        level: 45,
        turrets: 5,
        bullets: 1,
        bulletDamage: 9,
        bulletPenatration: 5,
        bulletSpeed: 19,
        reload: 12,
        healthRegen: 12,
        maxHealth: 62,
        bodyDamage: 12,
        movementSpeed: 12,
        accuracy: 1,
        sight: 3
    },

    "Super-Booster": {
        upgradesFrom: "Booster",
        level: 60,
        turrets: 7,
        bullets: 1,
        bulletDamage: 9,
        bulletPenatration: 5,
        bulletSpeed: 19,
        reload: 13,
        healthRegen: 13,
        maxHealth: 63,
        bodyDamage: 13,
        movementSpeed: 13,
        accuracy: 1,
        sight: 3
    },

    "Fallen-Booster": {
        upgradesFrom: "Super-Booster",
        level: 105,
        turrets: 9,
        bullets: 1,
        bulletDamage: 1,
        bulletPenatration: 1,
        bulletSpeed: 1,
        reload: 14.5,
        healthRegen: 30,
        maxHealth: 200,
        bodyDamage: 30,
        movementSpeed: 30,
        accuracy: 1,
        sight: 3
    },

    "Twin-Flank": {
        upgradesFrom: "Flank-Guard",
        level: 30,
        turrets: 4,
        bullets: 1,
        bulletDamage: 6,
        bulletPenatration: 9,
        bulletSpeed: 19,
        reload: 10,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 9,
        accuracy: 1,
        sight: 1
    },

    "L-BOZO-Spammer": {
        upgradesFrom: "Twin-Flank",
        level: 45,
        turrets: 12,
        bullets: 12,
        bulletDamage: 1,
        bulletPenatration: 1,
        bulletSpeed: 20,
        reload: 14,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 9,
        accuracy: 1,
        sight: 2
    },

    "Epic-Moments-Spammer": {
        upgradesFrom: "Twin-Flank",
        level: 45,
        turrets: 1,
        bullets: 24,
        bulletDamage: 6,
        bulletPenatration: 6,
        bulletSpeed: 20,
        reload: 14,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 9,
        accuracy: 1,
        sight: 2
    },

    "Gold-Twin-Flank": {
        upgradesFrom: "Twin-Flank",
        level: 45,
        turrets: 4,
        bullets: 1,
        bulletDamage: 9,
        bulletPenatration: 14,
        bulletSpeed: 29,
        reload: 12,
        healthRegen: 9,
        maxHealth: 54,
        bodyDamage: 4,
        movementSpeed: 9,
        accuracy: 1,
        sight: 2
    },
    "Diamond-Twin-Flank": {
        upgradesFrom: "Twin-Flank",
        level: 105,
        turrets: 4,
        bullets: 1,
        bulletDamage: 30,
        bulletPenatration: 30,
        bulletSpeed: 30,
        reload: 14.5,
        healthRegen: 50,
        maxHealth: 150,
        bodyDamage: 4,
        movementSpeed: 20,
        accuracy: 1,
        sight: 4
    },
}

export default tankStats