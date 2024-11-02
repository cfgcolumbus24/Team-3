import random
import json

# Define Grade 2-specific data for each part of the lesson plan
quick_practice_examples = {
    "Addition": [
        "Add two single-digit numbers (e.g., 8 + 5)",
        "Add two-digit numbers without carrying (e.g., 23 + 14)",
        "Identify addition in word problems (e.g., 'Lisa has 7 apples and gets 4 more')"
    ],
    "Subtraction": [
        "Subtract single-digit numbers (e.g., 9 - 2)",
        "Subtract two-digit numbers without borrowing (e.g., 34 - 12)",
        "Identify subtraction in word problems (e.g., 'Tom has 10 pencils and gives away 3')"
    ],
    "Division": [
        "Divide numbers within 20 (e.g., 15 ÷ 3)",
        "Understand equal sharing scenarios (e.g., 'Share 12 cookies among 3 friends')",
        "Solve division problems with no remainder (e.g., 16 ÷ 4)"
    ],
    "Multiplication": [
        "Multiply single-digit numbers (e.g., 2 x 3)",
        "Understand repeated addition as multiplication (e.g., 3 groups of 4 items)",
        "Identify multiplication in word problems (e.g., '3 baskets with 5 apples each')"
    ],
    "2-digit Addition": [
        "Add two two-digit numbers with carrying (e.g., 47 + 25)",
        "Practice adding larger two-digit numbers",
        "Identify addition in two-digit word problems"
    ],
    "2-digit Subtraction": [
        "Subtract two two-digit numbers with borrowing (e.g., 63 - 27)",
        "Practice subtracting larger two-digit numbers",
        "Identify subtraction in two-digit word problems"
    ],
    "2-digit Multiplication": [
        "Multiply a two-digit number by a single-digit number (e.g., 12 x 3)",
        "Solve word problems involving two-digit multiplication",
        "Practice two-digit multiplication using arrays"
    ],
    "2-digit Division": [
        "Divide a two-digit number by a single-digit number without remainders (e.g., 24 ÷ 6)",
        "Understand division with larger two-digit numbers",
        "Solve two-digit division word problems"
    ],
    "Word Problems": [
        "Solve addition and subtraction word problems with two-digit numbers",
        "Identify operations in story problems involving everyday scenarios",
        "Solve mixed-operation word problems"
    ]
}

activities = {
    "Addition": [
        "Add using counters or number lines",
        "Practice adding with number blocks",
        "Worksheet with simple addition problems"
    ],
    "Subtraction": [
        "Subtract using objects to model take-away scenarios",
        "Worksheet with single and two-digit subtraction problems",
        "Subtract on a number line"
    ],
    "Division": [
        "Divide objects into equal groups for hands-on practice",
        "Worksheet on basic division without remainders",
        "Use real-life examples to explain sharing equally"
    ],
    "Multiplication": [
        "Array building with small objects to demonstrate multiplication",
        "Worksheet on single-digit multiplication",
        "Multiplication games with flashcards"
    ],
    "2-digit Addition": [
        "Practice adding two-digit numbers with and without carrying",
        "Group activity to solve addition problems with blocks",
        "Two-digit addition worksheet with carrying exercises"
    ],
    "2-digit Subtraction": [
        "Practice two-digit subtraction with borrowing",
        "Partner activity with subtraction flashcards",
        "Two-digit subtraction worksheet with borrowing exercises"
    ],
    "2-digit Multiplication": [
        "Use base-ten blocks to model two-digit multiplication",
        "Worksheet on two-digit multiplication by single digits",
        "Solve multiplication word problems in pairs"
    ],
    "2-digit Division": [
        "Use grouping to demonstrate two-digit division",
        "Partner activity with flashcards for two-digit division",
        "Two-digit division worksheet without remainders"
    ],
    "Word Problems": [
        "Solve word problems with a partner",
        "Use manipulatives to act out word problems",
        "Worksheet with mixed-operation word problems"
    ]
}

essential_questions = {
    "Addition": ["Why do we add numbers?", "How does addition help us in daily life?"],
    "Subtraction": ["What does subtraction represent?", "When do we use subtraction?"],
    "Division": ["How can we share equally?", "What does division mean in real life?"],
    "Multiplication": ["What is multiplication?", "How is multiplication different from addition?"],
    "2-digit Addition": ["How do we add larger numbers?", "Why do we carry in addition?"],
    "2-digit Subtraction": ["What is borrowing in subtraction?", "How do we solve bigger subtraction problems?"],
    "2-digit Multiplication": ["How do we multiply larger numbers?", "What strategies help us multiply?"],
    "2-digit Division": ["How do we divide larger numbers?", "What is the meaning of a remainder in division?"],
    "Word Problems": ["What are math word problems?", "How do we solve math in real-life scenarios?"]
}

assessments = {
    "Addition": ["Addition quiz", "Create an addition word problem"],
    "Subtraction": ["Subtraction quiz", "Create a subtraction story problem"],
    "Division": ["Division quiz", "Solve real-life division problems"],
    "Multiplication": ["Multiplication quiz", "Create a multiplication story problem"],
    "2-digit Addition": ["Quiz on two-digit addition", "Solve word problems with two-digit addition"],
    "2-digit Subtraction": ["Quiz on two-digit subtraction", "Write and solve a two-digit subtraction problem"],
    "2-digit Multiplication": ["Quiz on two-digit multiplication", "Solve two-digit multiplication word problems"],
    "2-digit Division": ["Quiz on two-digit division", "Solve two-digit division problems with remainders"],
    "Word Problems": ["Mixed-operation word problems quiz", "Create and solve a real-life word problem"]
}

# Function to generate a lesson plan in text format for the assistant message
def generate_lesson_plan_text(topic):
    quick_practice = random.choice(quick_practice_examples.get(topic, ["Review basic concepts"]))
    activity1 = random.choice(activities.get(topic, ["Activity 1"]))
    activity2 = random.choice(activities.get(topic, ["Activity 2"]))
    activity3 = random.choice(activities.get(topic, ["Activity 3"]))
    essential_question1 = random.choice(essential_questions.get(topic, ["What is this concept?"]))
    essential_question2 = random.choice(essential_questions.get(topic, ["How can we apply this concept?"]))
    assessment1 = random.choice(assessments.get(topic, ["Quiz on topic basics"]))
    assessment2 = random.choice(assessments.get(topic, ["Create a problem related to topic"]))

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

# Define topics and structure the data for JSON with messages format
topics = ["Addition", "Subtraction", "Division", "Multiplication", "2-digit Addition", "2-digit Subtraction", "2-digit Multiplication", "2-digit Division", "Word Problems"]
json_data = []

# Set the number of variations per topic
num_variations = 3

# Generate structured message data for each topic with multiple variations
for topic in topics:
    for _ in range(num_variations):
        prompt = f"Generate a lesson plan for Grade 2, Math, {topic}"
        completion_text = generate_lesson_plan_text(topic)
        
        json_data.append({
            "messages": [
                {"role": "system", "content": "You are an educational assistant that creates structured lesson plans for specific topics, grade levels, and subjects."},
                {"role": "user", "content": prompt},
                {"role": "assistant", "content": completion_text}
            ]
        })

# Append to the JSONL file without overwriting
with open("lesson_plans.jsonl", "a") as f:
    for entry in json_data:
        f.write(json.dumps(entry) + "\n")
