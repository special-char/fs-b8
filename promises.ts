const lf = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("lf reject");
    }, 2000);
  });
};

const main = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("main reject");
    }, 3000);
  });
};

const rf = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rf resolved");
    }, 1000);
  });
};

const loadData = async () => {
  try {
    console.time("promise");
    const res = await Promise.any([main(), lf(), rf()]);
    console.log(res);

    // const lfRes = await lf()
    // const mainRes = await main()
    // const rfRes = await rf()
    console.timeEnd("promise");
  } catch (error) {
    console.log(error);
  }
};

// [ 'main resolved', 'lf resolved', 'rf resolved' ]

// [ { status: 'fulfilled', value: 'main resolved' },
//   { status: 'fulfilled', value: 'lf resolved' },
//   { status: 'fulfilled', value: 'rf resolved' } ]

loadData();

// const loadProducts = async () => {
//   try {
//     const loginRes = await fetch("http://localhost:3000/login", {
//       method: "POST",
//       body: JSON.stringify({
//         email: "yagnesh.modh@gmail.com",
//         password: "Password1!",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });

//     const loginJSON = await loginRes.json();

//     const productsRes = await fetch("http://localhost:3000/660/products", {
//         headers: {
//             Authorization: `Bearer ${loginJSON.accessToken}`
//         }
//     });

//     const productsJSON = await productsRes.json();

//     if(!productsRes.ok) {
//         throw new Error(productsJSON);
//     }

//     console.log(productsJSON);

//   } catch (error) {
//     console.log(error);
//   }
// };

// loadProducts()

// fetch("http://localhost:3000/login", {
//   method: "POST",
//   body: JSON.stringify({
//     email: "yagnesh.modh@gmail.com",
//     password: "Password1!",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   }
// })
// .then(res => {
//     return res.json()
// })
// .then(json => {
//     fetch("http://localhost:3000/660/products", {
//         headers: {
//             Authorization: `Bearer ${json.accessToken}`
//         }
//     })
//     .then(res => {
//         if(!res.ok) {
//             throw new Error("something went wrong...")
//         }
//         return res.json()
//     })
//     .then(json => {
//         console.log(json);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {
//     console.log(err);
// });

// const p1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("p1 rejected")
//          }, 2000)
//      })
// }

// p1()
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("finally");

// })
