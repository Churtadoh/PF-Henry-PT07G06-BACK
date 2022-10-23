const { Router } = require("express");
const { Cart, Product, Category } = require("../db");
const { getCartsDb, getCartById, findCartAndProduct } = require("../handlers");

const router = Router();
const PaymentController = require("../Controllers/PaymentControllers");
const PaymentService = require("../Service/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentService());

router.get("/", async (req, res) => {
  console.log("entro")
 
  PaymentInstance.getPaymentLink(req, res);
});

router.post("/response", async (req, res) => {
  console.log("entro succes",req.body)
  console.log("PRUEBA DE RESPUESTA")
  
  res.send(req.body)
});



module.exports = router;
