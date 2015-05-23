from datetime import datetime
__author__ = 'Girish'


from app import db
class Question(db.Model):
    __tablename__ = "Question"
    id = db.Column(db.Integer,primary_key=True)
    title =db.Column(db.Text,nullable=False,unique=True)
    description = db.Column(db.Text,nullable=False)
    language = db.Column(db.Text,nullable=False,default="all")
    test_input = db.Column(db.Text,nullable=False)
    test_output = db.Column(db.Text,nullable=False)
    testcases = db.relationship("TestCase")
    added_on = db.Column(db.DateTime(),default=datetime.utcnow())





class TestCase(db.Model):
    __tablename__ = "TestCase"
    id = db.Column(db.Integer,primary_key=True)
    question_id=db.Column(db.Integer,db.ForeignKey("Question.id"))
    input_test = db.Column(db.Text,nullable=False)
    output_tests =db.Column(db.Text,nullable=False)

    def __str__(self):
        return self.input_test







