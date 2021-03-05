function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs textarea');
   const printBestRestaurant = document.querySelector('#bestRestaurant p');
   const printBestRestaurantWorkers = document.querySelector('#workers p');

   function onClick() {
      let arr = JSON.parse(input.value);

      let restaurants = {};

      //сплитваме по ресторант и колекция от работници със заплати
      arr.forEach(line => {
         let tokens = line.split(' - ');
         let name = tokens[0];
         let workersAndSalaries = tokens[1].split(', ');

         let workers = [];

         //правим масив от работник и заплата
         for (let worker of workersAndSalaries) {
            let workerTokens = worker.split(' ');
            let workerName = workerTokens[0];
            let salary = Number(workerTokens[1]);

            workers.push({
               workerName,
               salary
            });
         }

         //ако ресторанта се повтаря ъпдейтваме работниците
         if (restaurants[name] !== undefined) {
            workers = workers.concat(restaurants[name].workers);
         }

         //сортираме работниците по най-висока заплата
         workers.sort((a, b) => b.salary - a.salary);

         //смятаме заплатите
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         // правим обект по ключ ресторант и стойност: работници, средна заплата и най-висока заплата
         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      });

      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;

      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               averageSalary: restaurants[name].averageSalary,
               bestSalary: restaurants[name].bestSalary,
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      printBestRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${(bestRestaurant.averageSalary).toFixed(2)} Best Salary: ${(bestRestaurant.bestSalary).toFixed(2)}`;

      let result = [];
      bestRestaurant.workers.forEach(w => {
         result.push(`Name: ${w.workerName} With Salary: ${w.salary}`)
      });

      printBestRestaurantWorkers.textContent = result.join(' ');
   }
}
