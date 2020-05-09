RegisterNetEvent('noderp_bot:Freeze');
onNet("noderp_bot:Freeze", (freeze, name) => {
	if (freeze) {
		FreezeEntityPosition(PlayerPedId(), true);
		emit('chat:addMessage', { args: [ `You have been frozen by ^1${name}` ] });
	}
	else if (!freeze) {
		FreezeEntityPosition(PlayerPedId(), false);
		emit('chat:addMessage', { args: [ `You have been unfrozen by ^1${name}` ] });
	}
});