// Задача 4-5
// bind для замены this в методах объекта
// Оформи вызов метода invokeInventoryAction таким образом, 
// чтобы в качестве this для методов
// inventory.add
// inventory.remove 
// выступал объект inventory

const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
      this.items.push(itemName);
      return `Adding ${itemName} to inventory`;
    },
    remove(itemName) {
      this.items = this.items.filter(item => item !== itemName);
      return `Removing ${itemName} from inventory`;
    },
  };
  
  const invokeInventoryAction = function(itemName, action) {
    const act =  action(itemName);
    const msg =  `Invoking action on ${itemName}`;
    return {act, msg};
  };
  
  const invokeAdd = invokeInventoryAction (
    'Medkit',
    inventory.add.bind(inventory, 'Medkit'), // Write code in this line
  );
  const arrayAdd = [...inventory.items];
  
  console.log(invokeAdd);
  //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }
  
  console.log(arrayAdd);
  // ['Knife', 'Gas mask', 'Medkit']

  
  const invokeRemove = invokeInventoryAction(
    'Gas mask',
    inventory.remove.bind(inventory, 'Gas mask'), // Write code in this line
  );
  
  const arrayRemove = [...inventory.items];
  
  
  console.log(invokeRemove);
  //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }
  
  console.log(arrayRemove);
  // ['Knife', 'Medkit']

  
