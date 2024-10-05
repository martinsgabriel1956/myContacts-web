class ContactMapper {
  toPersistence(domainContact) {
    return {
      id: domainContact.id,
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  toDomain(toPersistence) {
    return {
      id: toPersistence.id,
      name: toPersistence.name,
      email: toPersistence.email,
      phone: toPersistence.phone,
      category: {
        id: toPersistence.category_id,
        name: toPersistence.category_name,
      },
    };
  }
}

export default new ContactMapper();
