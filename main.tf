provider "aws" {
  region     = "ap-south-1"
  access_key = "Your_AWS_access_key"
  secret_key = "Your_AWS_secret_key"
}

resource "aws_instance" "my-server" {
  ami             = "ami-022d03f649d12a49d"
  instance_type   = "t2.micro"
  key_name        = "Your_Key_Name"
  security_groups = ["Youe_Security_Group_Name"]

  tags = {
    Name = "Amazon-Server"
  }

  connection {
    type        = "ssh"
    user        = "ec2-user"
    private_key = file("Key_Name.pem")
    host        = self.public_ip
  }

  provisioner "file" {
    source      = "path/installing_tools.sh"
    destination = "/tmp/installing_tools.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo chmod +x /tmp/installing_tools.sh",
      "sudo /tmp/installing_tools.sh",
    ]
  }
}
