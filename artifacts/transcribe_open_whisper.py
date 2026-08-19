import json
import os
from pathlib import Path

import torch
import whisper


torch.set_num_threads(8)

audio_path = Path(r"C:\Users\cocat\Downloads\Standard recording 1.mp3")
output_path = Path(r"E:\ai\proqurement dashboard ''\artifacts\standard-recording-1-open-whisper.json")
model_name = "medium.en"
model_path = Path.home() / ".cache" / "whisper" / f"{model_name}.pt"

if not audio_path.is_file():
    raise FileNotFoundError(audio_path)
if not model_path.is_file():
    raise FileNotFoundError(model_path)


def cached_download(_url: str, _root: str, in_memory: bool):
    """Use the verified cached checkpoint without re-reading it as one giant buffer."""
    if in_memory:
        return model_path.read_bytes()
    return str(model_path)


# The official loader tries to read a freshly downloaded 1.5 GB checkpoint into
# one Windows buffer. The cached file is already checksum-verified, so bypass
# only that download step while retaining Whisper's model alignment metadata.
whisper._download = cached_download
model = whisper.load_model(model_name, device="cpu", in_memory=False)

result = model.transcribe(
    str(audio_path),
    language="en",
    task="transcribe",
    fp16=False,
    word_timestamps=True,
    condition_on_previous_text=True,
    temperature=0,
    verbose=True,
)

result["metadata"] = {
    "engine": "openai-whisper",
    "model": model_name,
    "language": "en",
    "audio": str(audio_path),
}
output_path.parent.mkdir(parents=True, exist_ok=True)
with output_path.open("w", encoding="utf-8") as handle:
    json.dump(result, handle, ensure_ascii=False, indent=2)
print(f"Wrote {output_path}")
