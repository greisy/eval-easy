# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Institution.create!([
    { name: 'Harvard', address: 'Av. Principal de las Mercedes, diagonal al c.c Paseo las Mercedes', phone: '999-88-77'},
    { name: 'Universidad Central de Venezuela', address: 'Plaza Venezuela', phone: '777-99-33'},
    { name: 'Universidad Simón Bolívar', address: 'Sartenejas', phone: '1122-3344'}])
