const { Subscription} = require('../models/subscription'); 
const {User} = require('../models/user')



exports.createSubscription = async (req, res) => {
  try {
    const { userId, amount, paymentReference } = req.body;


    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }


    const newSubscription = await Subscription.create({
      userId,
      amount,
      paymentReference,
      status: 'active',
    });

    return res.status(201).json({ success: true, subscription: newSubscription });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


exports.getUserSubscriptions = async (req, res) => {
  try {
    const { userId } = req.params;


    const subscriptions = await Subscription.findAll({ where: { userId } });

    if (subscriptions.length === 0) {
      return res.status(404).json({ success: false, message: 'No subscriptions found for this user' });
    }

    return res.json({ success: true, subscriptions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


exports.updateSubscriptionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;


    const subscription = await Subscription.findByPk(id);
    if (!subscription) {
      return res.status(404).json({ success: false, message: 'Subscription not found' });
    }

    subscription.status = status || subscription.status;
    await subscription.save();

    return res.json({ success: true, subscription });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
