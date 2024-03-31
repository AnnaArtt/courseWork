import pika
import os
import json


# Підключення до RabbitMQ
url = os.environ.get('CLOUDAMQP_URL',
                     'amqps://qgezmimv:8aI_INTmDlEokw8uDnrGVujsahjJ_Bqg@rattlesnake.rmq.cloudamqp.com/qgezmimv')
params = pika.URLParameters(url)
connection = pika.BlockingConnection(params)
channel = connection.channel()

# Створення черги для відправлення відповідей
channel.queue_declare(queue='python_queue')


def send_response_to_nestjs(channel, response_message):
    # Відправлення відповіді назад у чергу NestJS
    channel.basic_publish(exchange='',
                          routing_key='reply_python_queue',
                          body=response_message)
    print(" [x] Sent response ")


def process_request(ch, method, properties, body):
    message = body.decode('utf-8')
    print(" [x] Received:")


    # Логіка обробки команди hello2
    if '"cmd":"setNewToken"' in message:
        data = json.loads(message)
        print(" [+] Token:", data["data"]["token"])
        response_data = {'message': 'ok'}
        response_message = str(response_data)
        send_response_to_nestjs(channel, response_message)

    # Підтвердження, що повідомлення було оброблене
    ch.basic_ack(delivery_tag=method.delivery_tag)


# Підписуємося на чергу для обробки повідомлень
channel.basic_consume(queue='python_queue', on_message_callback=process_request)

# Запускаємо обробку повідомлень у вічному циклі
print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()
