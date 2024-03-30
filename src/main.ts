class NameEmpty {
  public readonly code = "NameEmpty"
  public readonly message = "User name could not be empty."

  constructor(
    public readonly name: string
  ) { }

  isInvalid() {
    !this.name.length
  }
}

class NameTooLong {
  public readonly code = "NameTooLong"
  public readonly message = "User name must contains less than 100 characters."
  public readonly maxLength = 100

  constructor(
    public readonly name: string
  ) { }

  isInvalid() {
    this.name.length > this.maxLength
  }
}

class LastNameEmpty {
  public readonly code = "LastNameEmpty"
  public readonly message = "User last name could not be empty."

  constructor(
    public readonly lastName: string
  ) { }

  isInvalid() {
    return !this.lastName
  }
}

class LastNameTooLong {
  public readonly code = "LastNameTooLong"
  public readonly message = "User last name must contains less than 200 characters."
  public readonly maxLength = 200

  constructor(
    public readonly lastName: string
  ) { }

  isInvalid() {
    this.lastName.length > this.maxLength
  }
}

class EmailEmpty {
  public readonly code = "EmailEmpty"
  public readonly message = "User email could not be empty."

  constructor(
    public readonly email: string
  ) { }

  isInvalid() {
    !this.email.length
  }
}

class EmailInvalid {
  public readonly code = "EmailInvalid"
  public readonly message = "User email is not valid."

  constructor(
    public readonly email: string
  ) { }

  isInvalid() {
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return !emailRegex.test(this.email)
  }
}

enum Role {
  ADMIN,
  CUSTOMER,
  EMPLOYEE
}

class User {
  constructor(
    public name: string,
    public lastName: string,
    public email: string,
    public role: Role
  ) { }

  getValidationErrors() {
    return [
      new NameEmpty(this.name),
      new NameTooLong(this.name),
      new LastNameEmpty(this.lastName),
      new LastNameTooLong(this.lastName),
      new EmailEmpty(this.email),
      new EmailInvalid(this.email),
    ].filter(dto => dto.isInvalid())
  }
}

const user = new User("Gabriel", "Medeiros Souza", "gmsgabrielmedeiros@gmail.com", Role.ADMIN)

console.log(user.getValidationErrors())
