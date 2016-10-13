class CreateJlptVocabularies < ActiveRecord::Migration
  def change
    create_table :jlpt_vocabularies do |t|
      t.string :kanji
      t.string :hiragana
      t.string :english

      t.timestamps null: false
    end
  end
end
