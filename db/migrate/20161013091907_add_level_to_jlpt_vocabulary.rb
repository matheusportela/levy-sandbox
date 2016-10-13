class AddLevelToJlptVocabulary < ActiveRecord::Migration
  def change
    add_column :jlpt_vocabularies, :level, :integer
  end
end
