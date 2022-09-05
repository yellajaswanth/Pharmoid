FROM ubuntu 
RUN apt-get update -y && \
    apt-get install -y python3-pip

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . /app

# ENTRYPOINT ["python"]

CMD ["python3", "-m" , "flask", "run", "--host=0.0.0.0"]

