<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ruta base donde guardar (para evitar guardarlo fuera de web root)
    $baseDir = __DIR__;

    // Recibimos la ruta enviada
    $rutaRelativa = isset($_POST['ruta']) ? $_POST['ruta'] : 'uploads';

    // Sanitizar para evitar problemas (quitar ../, etc)
    $rutaRelativa = str_replace(['..', "\0"], '', $rutaRelativa);

    // Ruta completa absoluta
    $uploadDir = $baseDir . DIRECTORY_SEPARATOR . $rutaRelativa . DIRECTORY_SEPARATOR;

    // Crear carpeta si no existe
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];
        $filePath = $uploadDir . basename($file['name']);

        if (move_uploaded_file($file['tmp_name'], $filePath)) {
            echo json_encode([
                "status" => "success",
                "file" => $file['name'],
                "path" => $filePath
            ]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error moviendo el archivo."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No se recibió archivo."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método no permitido."]);
}
