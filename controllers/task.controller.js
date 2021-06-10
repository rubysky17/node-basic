const fs = require("fs");

const getProduct = () => {
  try {
    const buffer = fs.readFileSync("product.json");

    const prodJson = buffer.toString();

    const prodArr = JSON.parse(prodJson);

    return prodArr;
  } catch (error) {
    console.log(error);
    return [];
  }
};


const getDetail = (id) => {
    try {
        const buffer = fs.readFileSync("product.json");
    
        const prodJson = buffer.toString();
    
        const prodArr = JSON.parse(prodJson);
        const index = prodArr.findIndex(pro => pro.id === id)

        if (index !== -1 ) {
            return prodArr[index]
        }
         else {
            console.log("Không tìm thấy sản phẩm")
        }

      } catch (error) {
        console.log(error);
        return [];
      }
}

const addProduct = (name, price, amount, description) => {
  let product = getProduct();

  const newProduct = {
    id: Math.random().toString(),
    name,
    price,
    amount,
    description,
  };
  product = [...product, newProduct];

  fs.writeFileSync("product.json", JSON.stringify(product));
  console.log("Thêm sản phẩm thành công");
};

const updateProduct = (id, name, price, amount, description) => {
    console.log(id)
  let product = getProduct();

  let index = product.findIndex((prod) => prod.id === id);
  if (index !== -1) {

    const prodEdit = {
      id,
      name,
      price,
      amount,
      description,
    };

    product[index] = prodEdit;
    fs.writeFileSync("product.json", JSON.stringify(product));

    console.log("update thành công");
  } else {
    console.log("Không tìm thấy sản phẩm để update");
  }
};

const deleteProduct = (id) => {
  let product = getProduct();

  let index = product.findIndex((prod) => prod.id === id);

  if (index !== -1) {
    product.splice(index,1)

    fs.writeFileSync("product.json", JSON.stringify(product));

    console.log("Xóa thành công")
  } else {
    console.log("Không tìm thấy sản phẩm để Delete");
  }
};

module.exports = {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getDetail
};
