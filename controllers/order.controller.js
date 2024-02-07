import Order from "../models/Order";

const ordersController = async (req, res) => {
  const data = req.body;
  const { prod_id, prod_price, prod_name, prod_type, prod_nbr } = req.params;
  const user_id = req.params.userId;
  try {
    //ceate order object
    const newOrder = {
      user_id,
      prod_id,
      prod_name,
      prod_price,
      prod_nbr,
    };
    // creation of the order model

    const orderM = Order(newOrder);
    await orderM.save();
    return res.status(200).send("order accepted");
  } catch (error) {
    console.error(error);
  }
};

const remOrder = (req, res) => {
  const { orderID } = req.params;
  try {
    Order.findBy;
  } catch (error) {}
};
