from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

app = Flask(__name__)
CORS(app)

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-one-to-many-mmt")
# tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-one-to-many-mmt", src_lang="en_XX")

@app.route('/translate', methods=['POST'])
def translate():
    data = request.json
    article_en = data['text']
    # target_language = request.form.get('target-language', 'hi_IN')
    target_language = data.get('target-language', 'hi_IN')
    
    
    print("Target Language:", target_language)
    
      # Create a new instance of tokenizer for each translation request
    tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-one-to-many-mmt", src_lang="en_XX", tgt_lang=target_language)
    
    model_inputs = tokenizer(article_en, return_tensors="pt")
    generated_tokens = model.generate(
        **model_inputs,
        # forced_bos_token_id=tokenizer.lang_code_to_id["hi_IN"]
        forced_bos_token_id=tokenizer.lang_code_to_id[target_language]
    )
    translation = tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
    
    return jsonify({"translation": translation[0]})

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
