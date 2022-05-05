<?php

namespace App\Service;

use Doctrine\DBAL\Connection;

class ApiService {

    private $conn;

    public function __construct(Connection $conn) {
        $this->conn = $conn;
    }

    public function getJson($name) {
        $cigCalcul = $this->conn->fetchAllAssociative('SELECT * FROM ' . $name);

        return $cigCalcul;
    }

}