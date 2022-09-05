FROM ubuntu:20.04

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -q -y python3-pip


COPY ./requirements.txt /app/requirements.txt

WORKDIR /app
#RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . /app

ENTRYPOINT [ "python3" ]

CMD [ "app.py" ]
#CMD ["python3", "-m" , "flask", "run", "--host=0.0.0.0"]

