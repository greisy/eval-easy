DocumentType.create_with({ description: 'Pasaporte'}).find_or_create_by(code: 'P')
DocumentType.create_with({ description: 'Cedula'}).find_or_create_by(code: 'V')
DocumentType.create_with({ description: 'Extranjero'}).find_or_create_by(code: 'E')