from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

app = Flask(__name__)
CORS(app)

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-one-to-many-mmt")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-one-to-many-mmt", src_lang="en_XX")

@app.route('/translate', methods=['POST'])
def translate():
    data = request.json
    article_en = data['text']
    
    model_inputs = tokenizer(article_en, return_tensors="pt")
    generated_tokens = model.generate(
        **model_inputs,
        forced_bos_token_id=tokenizer.lang_code_to_id["hi_IN"]
    )
    translation = tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
    
    return jsonify({"translation": translation[0]})

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
