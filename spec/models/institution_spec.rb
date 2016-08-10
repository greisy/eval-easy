require 'rails_helper'

RSpec.describe Institution, type: :model do
  before do
    @institution = FactoryGirl.create(:institution, name: 'Harvard')
  end
  subject{ @institution }
  it { @institution.should be_valid }

  it "is invalid without a name" do
    FactoryGirl.build(:institution, name: nil).should_not be_valid
  end

  it "should have a unique name" do
    FactoryGirl.build(:institution, name: "Harvard").should_not be_valid
  end
end
