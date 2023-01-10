CREATE TABLE Users(
   id INT,
   first_name VARCHAR(100) NOT NULL,
   last_name VARCHAR(100) NOT NULL,
   email VARCHAR(100) NOT NULL,
   password VARCHAR(500) NOT NULL,
   deleted_users TINYINT(1) NOT NULL DEFAULT 0,
   age INT,
   creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   modification_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
   statut TINYINT(1) DEFAULT 0,
   PRIMARY KEY(id)
);

CREATE TABLE Contacts(
    id INT,
    id_users INT NOT NULL,
    contact_firstname VARCHAR(50),
    contact_lastname VARCHAR(50),
    contact_profilepicture VARCHAR(50) NOT NULL,
    contact_email VARCHAR(50),
    contact_phonenumber VARCHAR(50),
    deleted_contacts TINYINT(1) NOT NULL DEFAULT 0,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    modification_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    favoris TINYINT(1) DEFAULT 0,
    PRIMARY KEY(id),
    FOREIGN KEY(id_users) REFERENCES Users(id)
);