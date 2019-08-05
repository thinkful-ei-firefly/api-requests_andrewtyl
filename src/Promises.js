function Promises() {
    function doTask(name) {
        console.log(`${name} has started`);
        const duration =   Math.floor(Math.random() * 5000);
        setTimeout(() => {
          console.log(`${name} has ended after ${duration} milliseconds`);
        }, duration);
      };
      
      const p1 = new Promise((resolve, reject) => {
        console.log('Running the asynchronous code here');
        const duration =   Math.floor(Math.random() * 5000);
        setTimeout(() => {
          console.log('About to resolve');
          resolve(); //success!
        }, duration);
      });
      
      p1.then(() => {
        console.log('The promise completed successfully');
      });
}

export default Promises;
