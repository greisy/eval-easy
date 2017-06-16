class AcademicTermsController < ApplicationController
  before_action :set_environment, only: [:create]
  before_action :set_range_date_term, only: [:index]

  def index
    @academic_terms = @range_date_term.academic_terms
    respond_to do |format|
      format.json
    end
  end

  def create
    valid = true
    academic_terms = []
    range_date_term = @environment.range_date_terms.new(range_date_term_params)
    if range_date_term.valid?
      subject_params.each do |subject_id|
        subject = Subject.find subject_id
        academic_term = range_date_term.academic_terms.new(subject_id: subject.id)
        unless academic_term.valid?
          valid = false
        end
        academic_terms.push(academic_term)
      end
      if valid
        academic_terms.each(&:save)
        range_date_term.save
        render json: range_date_term, status: :ok
      else
        academic_term_errors = []
        academic_terms.each_with_index do |academic_term,index|
          
          if academic_term.errors.count > 0
            academic_term_errors.push(academic_term.errors)
          end
        end
        render json: academic_term_errors, status: unprocessable_entity
      end
    else
      render json: range_date_term.errors, status: :unprocessable_entity
    end
  end

  private
  def set_environment
    @environment = Environment.find params[:environment_id]
  end
  def set_range_date_term
    @range_date_term = RangeDateTerm.find params[:range_date_term_id]
  end

  def range_date_term_params
    params.require(:range_date_term).permit(:name, :start_date, :end_date)
  end
  def subject_params
    params.require(:subjects)
  end
end
