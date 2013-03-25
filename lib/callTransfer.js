function CallTransfer(call, transferTo) {
	if (!(this instanceof CallTransfer)) {
		return new CallTransfer(call, transferTo);
	}
	this.call = call
	this.transferTo = transferTo;
	this.whisperAudio = new Object();
}

module.exports = CallTransfer;