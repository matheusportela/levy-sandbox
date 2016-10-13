class JlptVocabulary < ActiveRecord::Base
	validates_presence_of :kanji
	validates_presence_of :hiragana
	validates_presence_of :english
	validates_presence_of :level
end
