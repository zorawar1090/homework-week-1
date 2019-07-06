//section 1 - hero object
const hero = {
    name: "John Doe",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "Uzi",
        damage: 2
    }
}

//enemies array with objects
const enemies = [{
    name: "Thanos",
    heroic: false,
    inventory: [],
    health: 10,
    weapon: {
        type: "Uzi",
        damage: 6
    }
},
{
    name: "Joker",
    heroic: false,
    inventory: [],
    health: 10,
    weapon: {
        type: "Intelligence",
        damage: 8
    }
},
{
    name: "Megatron",
    heroic: false,
    inventory: [],
    health: 10,
    weapon: {
        type: "Bazooka",
        damage: 9
    }
}]

//section 2
function rest(obj) {
    if (obj.health == 10) {
        alert("Health of object is 10!")
    } else {
        obj.health = 10
    }
    return obj
}

function pickUpItem(obj1, obj2) {
    obj1.inventory.push(obj2)
}

function equipWeapon(obj) {
    if (obj.inventory.length > 0) {
        obj.weapon = obj.inventory[0]
    }
}

//section4
//global variables
let selectEnemy = document.getElementById('selectEnemy')
const selectEnemy2 = document.getElementById('selectEnemy2')
const selectWeapon = document.getElementById('selectWeapon')
const enemyChosen = document.getElementById('enemyChosen')
const shoot = document.getElementById('shoot')

//Returns active enemies, i.e., enemies with health 1 or more
function displayEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].health == 0) {
            enemies.splice(i, 1);
        }
    }
    return enemies
}

//Decrements health of enemy-like object and increments damage done by weapon of hero-like object
function doDamage(obj1, obj2) {
    for (let i = 0; i < enemies.length; i++) {
        if (obj2 == enemies[i].name) {
            if (enemies[i].health > 0) {
                enemies[i].health--
                hero.weapon.damage++;
            }
            else {
                displaySelect1();
                alert("You defeated " + obj2 + ". Congrats!")
            }
        }
    }
}


//Displays hero's stats
function displayStats() {
    const stats = document.getElementById('stats')
    stats.innerHTML = null;
    const name = document.createElement('li')
    const health = document.createElement('li')
    const weaponType = document.createElement('li')
    const weaponDamage = document.createElement('li')

    name.innerHTML = hero.name
    health.innerHTML = hero.health
    weaponType.innerHTML = hero.weapon.type
    weaponDamage.innerHTML = hero.weapon.damage

    stats.appendChild(name)
    stats.appendChild(health)
    stats.appendChild(weaponType)
    stats.appendChild(weaponDamage)
}

//Changes name of hero
function changeName() {
    const name = document.getElementById('name')
    hero.name = name.value
    alert("Name of hero succesfully changed to " + name.value + "!")
}

//Chooses enemy
function chooseEnemy() {
    const enemyValue = selectEnemy.value
    for (let i = 0; i < displayEnemies().length; i++) {
        if (enemyValue == displayEnemies()[i].name) {
            enemyChosen.innerHTML = displayEnemies()[i].name + " chosen! Best of luck!!"
            shoot.innerHTML = "Shoot"
            return displayEnemies[i]
        }
    }
}

//Delete Enemy
function deleteEnemy() {
    const delEnemy = selectEnemy2.value
    for (let i = 0; i < enemies.length; i++) {
        if (delEnemy == enemies[i].name) {
            enemies.splice(i, 1)
            alert(delEnemy + " deleted successfully!")
        }
    }
    selectEnemy.innerHTML = null
    selectEnemy2.innerHTML = null
    displaySelect1();
    displaySelect2();

}

//Displays enemies in select dropdown to fight 
function displaySelect1() {
    selectEnemy.innerHTML = null
    let array = []
    for (let i = 0; i < displayEnemies().length; i++) {
        const option = document.createElement('option')
        option.innerHTML = displayEnemies()[i].name
        selectEnemy.appendChild(option)
        array.push(displayEnemies()[i].name)
    }
    return array
}

//Displays enemies in select dropdown to delete 
function displaySelect2() {
    for (let i = 0; i < enemies.length; i++) {
        const option = document.createElement('option')
        option.innerHTML = enemies[i].name
        selectEnemy2.appendChild(option)
    }
}
//Delete Weapon
function deleteWeapon() {
    const delWeapon = selectWeapon.value
    for (let i = 0; i < enemies.length; i++) {
        if (delWeapon == enemies[i].weapon.type) {
            delete enemies[i].weapon
            alert(delWeapon + " deleted successfully!")
        }
    }
    selectWeapon.innerHTML = null
    displayWeapons();
}

//Displays weapons in select dropdown to delete 
function displayWeapons() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].weapon != null) {
            const option = document.createElement('option')
            option.innerHTML = enemies[i].weapon.type
            selectWeapon.appendChild(option)
        }
    }
}

//initial call to display select dropdown values - fighting enemy section
displaySelect1();

//initial call to display select dropdown values - delete enemies section
displaySelect2();

//initial call to display select dropdown values - delete weapons section
displayWeapons();






