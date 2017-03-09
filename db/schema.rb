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

ActiveRecord::Schema.define(version: 20170222014835) do

  create_table "degrees", force: :cascade do |t|
    t.string   "name",           limit: 255
    t.text     "description",    limit: 65535
    t.integer  "institution_id", limit: 4
    t.integer  "total_credit",   limit: 4
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  add_index "degrees", ["institution_id"], name: "index_degrees_on_institution_id", using: :btree
  add_index "degrees", ["name", "institution_id"], name: "index_degrees_on_name_and_institution_id", unique: true, using: :btree

  create_table "document_types", force: :cascade do |t|
    t.string   "code",        limit: 255
    t.text     "description", limit: 65535
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "institutions", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.text     "address",    limit: 65535
    t.string   "phone",      limit: 255
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name",        limit: 255
    t.text     "description", limit: 65535
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "scale_types", force: :cascade do |t|
    t.string   "name",        limit: 255
    t.string   "description", limit: 255
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "scales", force: :cascade do |t|
    t.string   "name",                  limit: 255
    t.integer  "minimum_grade",         limit: 4
    t.integer  "maximum_grade",         limit: 4
    t.integer  "grade_to_pass_default", limit: 4
    t.text     "description",           limit: 65535
    t.string   "alphabetic_scale",      limit: 255
    t.integer  "scale_type_id",         limit: 4
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string   "code",           limit: 255
    t.string   "name",           limit: 255
    t.text     "description",    limit: 65535
    t.integer  "credits",        limit: 4
    t.integer  "scale_id",       limit: 4
    t.integer  "grade_to_pass",  limit: 4
    t.boolean  "round_up",                     default: false
    t.integer  "institution_id", limit: 4
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
  end

  add_index "subjects", ["institution_id", "code", "name"], name: "index_subjects_on_institution_id_and_code_and_name", unique: true, using: :btree
  add_index "subjects", ["institution_id"], name: "index_subjects_on_institution_id", using: :btree
  add_index "subjects", ["scale_id"], name: "index_subjects_on_scale_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  limit: 255, default: "", null: false
    t.string   "encrypted_password",     limit: 255, default: "", null: false
    t.string   "reset_password_token",   limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          limit: 4,   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",     limit: 255
    t.string   "last_sign_in_ip",        limit: 255
    t.string   "confirmation_token",     limit: 255
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email",      limit: 255
    t.integer  "role_id",                limit: 4
    t.string   "identity_card",          limit: 255
    t.string   "name",                   limit: 255
    t.string   "last_name",              limit: 255
    t.string   "phone",                  limit: 255
    t.integer  "institution_id",         limit: 4
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.integer  "document_type_id",       limit: 4
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["institution_id"], name: "index_users_on_institution_id", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["role_id"], name: "index_users_on_role_id", using: :btree

  add_foreign_key "degrees", "institutions"
  add_foreign_key "subjects", "institutions"
  add_foreign_key "subjects", "scales"
  add_foreign_key "users", "institutions"
  add_foreign_key "users", "roles"
end
