require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < MiniTest::Test

  def setup
    @card_game = CardGame.new
    @card1 = Card.new('diamonds', 6)
    @card2 = Card.new('hearts', 2)
    @card3 = Card.new('spades', 2)
  end

  def test_checkforAce
    result = @card_game.checkforAce(@card1)
    assert_equal(result, false)
  end

  def test_highestcard
    result = @card_game.highest_card(@card1, @card2)
    assert_equal(result, @card1)
  end


  def test_cards_total
    cards = [@card1, @card2, @card3]
    result = CardGame.cards_total(cards)
    assert_equal(result, "You have a total of 10")
  end
end
