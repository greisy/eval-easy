# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170420020224) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "document_types", force: :cascade do |t|
    t.string   "code"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "environment_users", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "role_id"
    t.integer  "environment_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "environment_users", ["environment_id"], name: "index_environment_users_on_environment_id", using: :btree
  add_index "environment_users", ["role_id"], name: "index_environment_users_on_role_id", using: :btree
  add_index "environment_users", ["user_id"], name: "index_environment_users_on_user_id", using: :btree

  create_table "environments", force: :cascade do |t|
    t.integer  "institution_id"
    t.integer  "user_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "environments", ["institution_id"], name: "index_environments_on_institution_id", using: :btree
  add_index "environments", ["user_id"], name: "index_environments_on_user_id", using: :btree

  create_table "institutions", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.integer  "permission_level"
    t.string   "description"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "scale_types", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "scales", force: :cascade do |t|
    t.string   "name"
    t.integer  "minimum_grade"
    t.integer  "maximum_grade"
    t.integer  "grade_to_pass_default"
    t.text     "description"
    t.string   "alphabetic_scale"
    t.integer  "scale_type_id"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string   "code"
    t.string   "name"
    t.text     "description"
    t.integer  "scale_id"
    t.integer  "grade_to_pass"
    t.boolean  "round_up",       default: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.integer  "environment_id"
    t.date     "start_date"
    t.date     "end_date"
  end

  add_index "subjects", ["scale_id"], name: "index_subjects_on_scale_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "identity_card"
    t.string   "name"
    t.string   "last_name"
    t.string   "phone"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "document_type_id"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "environment_users", "environments"
  add_foreign_key "environment_users", "roles"
  add_foreign_key "environment_users", "users"
  add_foreign_key "environments", "institutions"
  add_foreign_key "environments", "users"
  add_foreign_key "subjects", "scales"
end
