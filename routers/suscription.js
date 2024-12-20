const express = require('express');
const { createSubscription, getUserSubscriptions, updateSubscriptionStatus } = require('../controller/suscription');
const router = express.Router();


router.post('/subscriptions', createSubscription);


router.get('/subscriptions/:userId', getUserSubscriptions);


router.put('/subscriptions/:id', updateSubscriptionStatus);

module.exports = router;
