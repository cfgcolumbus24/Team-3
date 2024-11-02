import random
import json

# Example data for topics, activities, and questions

quick_practice_examples = {
    "Addition": [
        "Add single-digit numbers (e.g., 5 + 3)",
        "Identify addition in word problems (e.g., 'John has 4 apples and buys 3 more')"
    ],
    "Subtraction": [
        "Subtract single-digit numbers (e.g., 9 - 4)",
        "Identify subtraction in word problems (e.g., 'Emma has 10 pencils and gives 3 away')"
    ],
    "Division": [
        "Divide numbers evenly within 20 (e.g., 12 ÷ 3)",
        "Identify division in real-life scenarios (e.g., 'Share 10 cookies among 2 people')"
    ],
    "Multiplication": [
        "Multiply single-digit numbers (e.g., 4 x 2)",
        "Identify multiplication in word problems (e.g., 'There are 3 baskets with 4 apples each')"
    ],
    "2-digit Addition": [
        "Add two 2-digit numbers without carrying (e.g., 23 + 14)",
        "Add two 2-digit numbers with carrying (e.g., 47 + 35)"
    ],
    "2-digit Subtraction": [
        "Subtract two 2-digit numbers without borrowing (e.g., 55 - 22)",
        "Subtract two 2-digit numbers with borrowing (e.g., 63 - 27)"
    ],
    "2-digit Multiplication": [
        "Multiply a 2-digit number by a single-digit number (e.g., 23 x 3)",
        "Multiply two 2-digit numbers (e.g., 12 x 14)"
    ],
    "2-digit Division": [
        "Divide a 2-digit number by a single-digit number (e.g., 36 ÷ 6)",
        "Identify division problems with remainders (e.g., 25 ÷ 4)"
    ],
    "Word Problems": [
        "Solve word problems involving addition and subtraction (e.g., 'Anna has 15 marbles and loses 4')",
        "Solve word problems involving multiplication and division (e.g., 'A box has 5 rows with 3 toys in each row')"
    ]
}


activities = {
    "Addition": [
        "Practice adding with visual aids, such as counters or beads",
        "Group activity using number blocks to model addition",
        "Addition drill worksheet for individual practice"
    ],
    "Subtraction": [
        "Use manipulatives to model subtraction problems",
        "Pair up students for 'take away' games with flashcards",
        "Subtraction worksheet with visual aids for independent practice"
    ],
    "Division": [
        "Use grouping objects to model division and sharing",
        "Group activity with real-world division scenarios, like sharing snacks",
        "Division worksheet with simple division facts for practice"
    ],
    "Multiplication": [
        "Array building with counters to visualize multiplication",
        "Multiplication bingo game for reinforcing facts",
        "Multiplication tables worksheet for practice and memorization"
    ],
    "2-digit Addition": [
        "Use base-ten blocks to model 2-digit addition",
        "Group activity where students solve problems and compare answers",
        "Worksheet with exercises on adding 2-digit numbers with and without carrying"
    ],
    "2-digit Subtraction": [
        "Use base-ten blocks to model subtraction with and without borrowing",
        "Partner activity to practice 2-digit subtraction problems",
        "Worksheet focusing on subtracting 2-digit numbers with and without borrowing"
    ],
    "2-digit Multiplication": [
        "Teach partial product multiplication with a visual area model",
        "Group activity solving 2-digit multiplication word problems",
        "Worksheet with a variety of 2-digit multiplication exercises"
    ],
    "2-digit Division": [
        "Use objects to divide larger groups, emphasizing remainders",
        "Partner activity to practice 2-digit division with and without remainders",
        "Worksheet with problems requiring 2-digit numbers divided by single digits"
    ],
    "Word Problems": [
        "Real-life scenarios to solve word problems in pairs or small groups",
        "Use story mats for students to act out word problems with manipulatives",
        "Word problem worksheet covering addition, subtraction, multiplication, and division"
    ]
}


essential_questions = {
    "Addition": [
        "What does it mean to add?",
        "How can we use addition in daily life?"
    ],
    "Subtraction": [
        "What does it mean to take away or subtract?",
        "How is subtraction different from addition?"
    ],
    "Division": [
        "What does it mean to divide something?",
        "How can division help us share or group items evenly?"
    ],
    "Multiplication": [
        "What is multiplication, and how is it different from addition?",
        "How can we use multiplication in real-life situations?"
    ],
    "2-digit Addition": [
        "What happens when we add larger numbers?",
        "How do we carry numbers when adding two-digit numbers?"
    ],
    "2-digit Subtraction": [
        "What happens when we subtract larger numbers?",
        "How do we borrow in subtraction, and why is it necessary?"
    ],
    "2-digit Multiplication": [
        "How is multiplying larger numbers different from single-digit multiplication?",
        "What strategies can we use to multiply two-digit numbers?"
    ],
    "2-digit Division": [
        "How is dividing larger numbers different from single-digit division?",
        "What does a remainder mean in division?"
    ],
    "Word Problems": [
        "How can we solve math problems that are written as stories?",
        "What strategies can help us understand and solve word problems?"
    ]
}


assessments = {
    "Addition": [
        "Addition quiz with single-digit and simple two-digit problems",
        "Create a simple addition story problem to demonstrate understanding"
    ],
    "Subtraction": [
        "Subtraction quiz focusing on single-digit and two-digit numbers",
        "Write a story problem that involves subtraction and solve it"
    ],
    "Division": [
        "Division quiz with basic division facts and real-life examples",
        "Solve division word problems and explain the process"
    ],
    "Multiplication": [
        "Multiplication quiz on single-digit and two-digit problems",
        "Create a multiplication story problem to demonstrate understanding"
    ],
    "2-digit Addition": [
        "Quiz on adding two-digit numbers with and without carrying",
        "Solve a set of word problems involving two-digit addition"
    ],
    "2-digit Subtraction": [
        "Quiz on subtracting two-digit numbers with and without borrowing",
        "Write and solve a two-digit subtraction story problem"
    ],
    "2-digit Multiplication": [
        "Quiz on multiplying two-digit numbers by single-digit numbers",
        "Solve multi-step word problems involving two-digit multiplication"
    ],
    "2-digit Division": [
        "Quiz on dividing two-digit numbers by single-digit numbers, with and without remainders",
        "Explain the meaning of remainders through word problems"
    ],
    "Word Problems": [
        "Quiz with mixed-operation word problems involving addition, subtraction, multiplication, and division",
        "Create and solve a real-life word problem involving math operations"
    ]
}


def generate_lesson_plan_text(topic):
    # Retrieve data for the given topic, using random.choice to add variation
    quick_practice = random.choice(quick_practice_examples.get(topic, ["Review basic concepts"]))
    activity1 = activities.get(topic, ["Activity 1"])[0]
    activity2 = activities.get(topic, ["Activity 2"])[1]
    activity3 = activities.get(topic, ["Activity 3"])[2]
    essential_question1 = essential_questions.get(topic, ["What is this concept?"])[0]
    essential_question2 = essential_questions.get(topic, ["How can we apply this concept?"])[1]
    assessment1 = assessments.get(topic, ["Quiz on topic basics"])[0]
    assessment2 = assessments.get(topic, ["Create a problem related to topic"])[1]

    # Format lesson plan as text for the assistant response
    lesson_plan_text = f"""
    Quick practice (questions level below the given subject):
    - {quick_practice}

    Daily routine:
        Activity 1: {activity1}
        Activity 2: {activity2}
        Activity 3: {activity3}

    Essential questions:
        1. {essential_question1}
        2. {essential_question2}

    Assessments:
        1. {assessment1}
        2. {assessment2}
    """
    return lesson_plan_text.strip()

# Define the topics and structure the data for JSON with messages format
topics = ["Addition", "Subtraction", "Division", "Multiplication", "2-digit Addition", "2-digit Subtraction", "2-digit Multiplication", "2-digit Division", "Word Problems"]
json_data = []

# Generate structured message data for each topic
for topic in topics:
    prompt = f"Generate a lesson plan for Grade 1, Math, {topic}"
    completion_text = generate_lesson_plan_text(topic)
    
    # Structure each lesson plan as a message entry
    json_data.append({
        "messages": [
            {"role": "system", "content": "You are an educational assistant that creates structured lesson plans based on specific topics, grade levels, and subjects."},
            {"role": "user", "content": prompt},
            {"role": "assistant", "content": completion_text}
        ]
    })

# Save the data to a .jsonl file
with open("lesson_plans.jsonl", "w") as f:
    for entry in json_data:
        f.write(json.dumps(entry) + "\n")