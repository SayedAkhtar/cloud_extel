<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST["first_name"]);
    $last_name = htmlspecialchars($_POST["last_name"]);
    $email = htmlspecialchars($_POST["email"]);
    $position = htmlspecialchars($_POST["position"]);
    $current_ctc = htmlspecialchars($_POST["current_ctc"]);
    $notice_period = htmlspecialchars($_POST["notice_period"]);
    $to = "careers@cloudextel.com";
    $email_subject = "Job Application for $position - $first_name $last_name";
    $headers = "From: ".$email."\r\n";
    $headers .= "Reply-To: careers@cloudextel.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary123\"\r\n";

    // Email body
    $email_body = "--boundary123\n";
    $email_body .= "Content-Type: text/plain; charset=UTF-8\n\n";
    $email_body .= "New Job Application Submission:\n\n";
    $email_body .= "First Name: $first_name\n";
    $email_body .= "Last Name: $last_name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Position: $position\n";
    $email_body .= "Current CTC: $current_ctc\n";
    $email_body .= "Notice Period: $notice_period\n\n";

    // Handle File Upload
    if (isset($_FILES["resume"]) && $_FILES["resume"]["error"] == UPLOAD_ERR_OK) {
        $file_tmp = $_FILES["resume"]["tmp_name"];
        $file_name = basename($_FILES["resume"]["name"]);
        $file_size = $_FILES["resume"]["size"];
        $file_type = mime_content_type($file_tmp);

        // Allowed file types
        $allowed_types = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

        if (!in_array($file_type, $allowed_types)) {
            echo "Invalid file type. Only PDF and DOC files are allowed.";
            exit;
        }

        // Save file to server
        $upload_dir = "uploads/";
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }
        $file_path = $upload_dir . time() . "_" . $file_name;
        move_uploaded_file($file_tmp, $file_path);

        // Attach file to email
        $file_content = file_get_contents($file_path);
        $file_content = chunk_split(base64_encode($file_content));

        $email_body .= "--boundary123\n";
        $email_body .= "Content-Type: $file_type; name=\"$file_name\"\n";
        $email_body .= "Content-Transfer-Encoding: base64\n";
        $email_body .= "Content-Disposition: attachment; filename=\"$file_name\"\n\n";
        $email_body .= "$file_content\n\n";
    }

    $email_body .= "--boundary123--";

    // Send Email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Application submitted successfully!";
    } else {
        echo "Failed to submit the application. Please try again.";
    }
} else {
    echo "Invalid request!";
}
?>
