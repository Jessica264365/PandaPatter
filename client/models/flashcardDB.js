const mongoose = require('mongoose');

const FlashCardSchema = new mongoose.Schema({
    language: {
        type: String,
        default: '',
      },
      FlashCard: 
        {
          type: Input,
          trim: true,
          default:'' 
        },  
});

const FlashCard = mongoose.model('FlashCard', FlashCardSchema);

module.exports = FlashCard;