import { Product } from '@src/core/model';
import {
  imageBlendedScotch_JohnWalker,  // 1
  imageBlendedScotch_Odyssey,  // 2
  imageBlendedScotch_KingGeorgeV,  // 3
  imageBlendedScotch_JohnWalker_2016,  // 4
  imageBlendedScotch_JohnWalker_2017,  // 5
  imageBlendedScotch_JohnWalker_2018,  // 6
  imageSingleMalt_Cladach_42,  // 7
  imageSingleMalt_GlenOrd_42,  // 8
  imageSingleMalt_GlenOrd_41,  // 9
  imageSingleMalt_GlenOrd_40,  // 10
  imageSingleMalt_Talisker_25,  // 11
  imageSingleMalt_CaoIla_15,  // 12
  imageSingleMalt_Teaninich_17,  // 13
  imageSingleMalt_Inchgower_27,  // 14
  imageSingleMalt_Oban_21,  // 15
  imageSingleMalt_Pittyvaich,  // 16
  imageSingleMalt_Linkwood_37,  // 17
  imageSingleMalt_PortEllen_39,  // 18
  imageSingleMalt_Clynelish_2015,  // 19
  imageSingleMalt_Talisker_15,  // 20
  imageSingleMalt_Cragganmore_12,  // 21
  imageSingleMalt_Cardhu_14,  // 22
  imageSingleMalt_Lagavulin_12,  // 23
  imageSingleMalt_PittyVaich_29,  // 24
  imageSingleMalt_Dalwhinnie_30,  // 25
  imageSingleMalt_Mortlach_26,  // 26
  imageSingleMalt_SingletonOfGlenOrd_18,  // 27
} from '@src/assets/images';

export const products: Product[] = [
  {
   name: 'THE JOHN WALKER\nTHE FOUNDER\'S BLEND',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_JohnWalker,
    description: 'Kiệt tác The John Walker kiêu hãnh mang tên người sáng lập nên thương hiệu Johnnie Walker, là lời tán dương tối thượng đến bậc kì tài đã cống hiến cả cuộc đời cho ngành thủ công chế tác whisky. Siêu phẩm The John Walker được tuyển chọn từ những dòng whisky quí hiếm cùng thời với John Walker, có những loại whisky cả trăm năm tuổi. Những tinh chất này đã được chế tác thủ công theo phương pháp truyền thống với số lượng vô cùng hạn chế, trước khi được ủ trong một thùng gỗ sồi duy nhất. Vì thế, từng giọt vàng ngọc mang đến một trải nghiệm thăng hoa của vị giác, bắt đầu với hương gỗ sồi vani mạnh mẽ và kết thúc nồng nàn với vị khói đặc trưng. Chỉ những bậc sành sỏi về whisky mới cảm nhận trọn vẹn sự phối trộn tinh tế này. The John Walker được thiết kế kì công từ pha lê Baccarat trứ danh, cổ chai nạm vàng 24k, cùng hộp gỗ sơn mài sang trọng, khắc chế công phu với 11 lớp tinh xảo trong hơn 60 giờ.',
    size: 'Thể tích: 70 cl / Độ cồn: 40%\n' +
        'Bộ sưu tập: The Last Cask\n' +
        'Thùng ủ: Gỗ sồi 100 năm tuổi\n' +
        'Hương vị: Gỗ sồi, vani, dư vị khói đặc trưng\n' +
        'Số lượng 330 chai',
  },
  {
    name: 'ODYSSEY\nRARE TRIPPLE MALT',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_Odyssey,
    description: 'Whisky là thức uống mang dấu ấn những hành trình kì vĩ. Tới đầu thế kỉ 20, danh tiếng của dòng whisky hảo hạng Johnnie Walker đã vượt ra khỏi xứ sở Scotland để vang danh khắp châu Âu và thế giới. Những thùng gỗ sỗ lớn đã trải qua hàng thập kỉ ròng rã trau dồi hương vị, nay tiếp tục hành trình của mình trên những con tàu vượt biển lớn đến mọi nẻo đường trên toàn thế giới. Bước tiến vĩ đại này đã khai sinh ra John Walker & Sons Odyssey - tuyệt phẩm whisky với thiết kế độc đáo giúp chai có khả năng hòa nhịp cùng chuyển động của sóng biển. Loại rượu whisky thanh tao này được làm từ ba loại mạch nha đơn có chất lượng tuyệt hảo. Cảm nhận ở lần nhấp môi đầu tiên là hương kẹo toffee và mật ong lan tỏa. Hậu vị đầy ấn tượng với hương khói thơm nồng nàn đầy quyến rũ dường như kéo dài đến vô tận.',
    size: 'Thể tích: 70 cl / Độ cồn: 40%\n' +
        'Bộ sưu tập: John Walker & Sons\n' +
        'Thùng ủ: Gỗ sồi châu Âu\n' +
        'Hương vị: Toffee, mật ong, quả berry, óc chó, dư vị khói đặc trưng\n' +
        'Số lượng giới hạn\n',
  },
  {
    name: 'KING GEORGE V\nA REGAL BLEND OF OUR RAREST WHISKY',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_KingGeorgeV,
    description: 'John Walker & Sons King George V là tuyệt tác whisky để ghi dấu sự kiện gia tộc Johnnie Walker vinh dự trở thành nhà cung cấp chính thức cho Hoàng gia Anh. Tuyệt phẩm whisky này phối trộn những hương vị đặc trưng của các nhà chưng cất rượu tồn tại trong triều đại vua George Đệ Ngũ, mang lại hương vị nồng mượt đặc trưng vốn chỉ dành cho hoàng tộc Cuốn hút từ giây phút đầu tiên, John Walker & Sons King George V đưa những nhà thưởng thức khó tính vào một chuyến phiêu lưu vị giác của các loại hạt rang, vị sô cô la đen và khói ngọt nồng đượm, hòa quyện cùng hương vị mật ong, chanh cam và cánh hoa hồng. Chai John Walker & Sons King George V được thiết kế với những góc cạnh sang trọng. Mỗi chai mang trong mình một số serial duy nhất, phản ánh tính chất giới hạn của dòng whisky hoàng tộc này.',
    size: 'Thể tích: 70 cl / Độ cồn: 43%\n' +
        'Bộ sưu tập: John Walker & Sons\n' +
        'Thùng ủ: Gỗ sồi Bourbon và Sherry\n' +
        'Hương vị: Nồng ấm từ loại hạt rang và vị khói, ngọt ngào của sô cô la đen, mật ong và trái cây tươi\n' +
        'Số lượng giới hạn',
  },
  {
    name: 'THE JOHN WALKER\nPRIVATE COLLECTION™ PHIÊN BẢN 2016',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_JohnWalker_2016,
    description: 'John Walker & Sons Private Collection Phiên Bản 2016 là phiên bản thứ ba trong series giới hạn được tung ra hàng năm, nối tiếp vai trò tôn vinh kỹ nghệ chế tác tinh hoa và tính sáng tạo của thương hiệu whisky John Walker & Sons. Với phiên bản giới hạn 2016, chỉ 8,888 chai được phân phối trên toàn thế giới. Sản phẩm được đóng chai trong bình thủy tinh sang trọng độc đáo, được đánh số riêng biệt nhằm tôn vinh hình hảnh nhãn nghiêng 24 độ nổi tiếng của Johnie Walker. Hơn 100 thùng gỗ sồi từ kho thùng ủ quý hiếm của nhà John Walker được chọn lọc để tạo tác nên chất rượu tinh túy độc nhất trong phiên bản này. Dấu ấn đầu tiên chính là mùi vị của sự sống căng tràn đến từ vùng đất nổi tiếng của Scotland. Kết cấu nhẹ nuông chiều làn môi trong lớp bọt kem êm ái. Vị ngọt ngào của mật ong hòa quyện cùng hương gỗ sồi và vani lướt nhẹ trên đầu lưỡi, đưa vị giác chu du đến thiên đường đa tầng hương toát ra từ lớp vỏ của trái cây chín mọng.',
    size: 'Thể tích: 70 cl / Độ cồn: 43%\n' +
        'Bộ sưu tập: Special Release 2016\n' +
        'Thùng ủ: Gỗ sồi\n' +
        'Hương vị: Mật ong ngọt ngào, hương sồi và vanilla hoà quyện tạo lớp bọt kem, trái cây tươi (lê và vỏ táo)\n' +
        'Chỉ có 8,888 chai trên toàn thế giới',
  },
  {
    name: 'THE JOHN WALKER\nPRIVATE COLLECTION™ PHIÊN BẢN 2017',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_JohnWalker_2017,
    description: 'John Walker & Sons Private Collection™ 2017 là phiên bản thứ tư của bộ sưu tập quý hiếm được tung ra hàng năm, nhằm tôn vinh tinh thần sáng tạo và kỹ thuật sản xuất độc nhất của thương hiệu whisky John Walker & Sons™ . Chỉ có 5.588 chai được đánh số trên thị trường thế giới, phiên bản đặc biệt 2017 được mang tên “Mastery of Oak” chính bởi sự cầu kỳ trong quá trình chuyển đổi rượu từ các thùng chưng cất. Quá trình rượu trưởng thành từ những thùng gỗ sồi già Mỹ đến thùng gỗ sồi non Mỹ/châu Âu đã tạo nên hương vị vani ngọt ngào cùng nồng độ đúng chuẩn. Vị ngọt đậm đà của trái cây hòa quyện cùng hương gỗ sồi và vani lướt nhẹ trong vòm họng, đưa vị giác trải qua nhiều cung bậc của các tầng hương. Hậu vị kéo dài bằng hương khói nồng lan tỏa. Thiết kế chai cổ điển sang trọng với nắp chai được minh họa như các vòng gỗ sồi cùng đường cắt góc cạnh thể hiện trọn vẹn sự hoàn hảo của loại whisky thượng hạng này',
    size: 'Thể tích: 70 cl / Độ cồn: 46.8%\n' +
        'Whisky mạch nha đơn vùng Speyside\n' +
        'Bộ sưu tập: Special Release 2017\n' +
        'Thùng ủ: Gỗ sồi già Mỹ và châu Âu\n' +
        'Hương vị: Vị ngọt hương vanilla nồng nàn, trái cây, mùi khói hài hoà ở hậu vị\n' +
        'Chỉ có 8,5.588 chai trên toàn thế giới',
  },
  {
    name: 'THE JOHN WALKER\nPRIVATE COLLECTION™ 28 NĂM TUỔI',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_JohnWalker_2018,
    description: 'John Walker & Sons Private C ollection™ 2017 là phiên bản thứ tư của bộ sưu tập quý hiếm được tung ra hàng năm, nhằm tôn vinh tinh thần sáng tạo và kỹ thuật sản xuất độc nhất của thương hiệu whisky John Walker & Sons™ . Chỉ có 5.588 chai được đánh số trên thị trường thế giới, phiên bản đặc biệt 2017 được mang tên “Mastery of Oak” chính bởi sự cầu kỳ trong quá trình chuyển đổi rượu từ các thùng chưng cất. Quá trình rượu trưởng thành từ những thùng gỗ sồi già Mỹ đến thùng gỗ sồi non Mỹ/châu Âu đã tạo nên hương vị vani ngọt ngào cùng nồng độ đúng chuẩn. Vị ngọt đậm đà của trái cây hòa quyện cùng hương gỗ sồi và vani lướt nhẹ trong vòm họng, đưa vị giác trải qua nhiều cung bậc của các tầng hương. Hậu vị kéo dài bằng hương khói nồng lan tỏa. Thiết kế chai cổ điển sang trọng với nắp chai được minh họa như các vòng gỗ sồi cùng đường cắt góc cạnh thể hiện trọn vẹn sự hoàn hảo của loại whisky thượng hạng này.',
    size: 'Thể tích: 70 cl / Độ cồn: 46.8%\n' +
        'Whisky mạch nha đơn vùng Speyside\n' +
        'Bộ sưu tập: Special Release 2017\n' +
        'Thùng ủ: Gỗ sồi già Mỹ và châu Âu\n' +
        'Hương vị: Vị ngọt hương vanilla nồng nàn, trái cây, mùi khói hài hoà ở hậu vị\n' +
        'Chỉ có 8,5.588 chai trên toàn thế giới',
  },
];

export const productsSingleMalt: Product[] = [
  {  // 7
    name: 'CLADACH',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Cladach_42,
    description: 'Cái tên Cladach trong tiếng Gaelic có nghĩa là “đường bờ biển”. Đây là sản phẩm đầu tiên được phối trộn từ 6 nhà máy chưng cất mạch nha đơn lừng danh miền duyên hải của Diageo: Caol Ila, Clynelish, Lagavulin, Oban, Inchgower và Talisker. Xuất hiện sau cùng và cũng được mong chờ nhất trong bộ sưu tập đặc biệt năm 2018 của Diageo, Cladach là đại diện tiêu biểu cho whisky mạch nha đơn tinh túy miền duyên hải. Màu vàng hổ phách cùng thiết kế độc đáo và hiện đại gợi lên hình ảnh những eo biển uốn lượn. Mang hương vị của biển cả, Cladach tựa như con thuyền vượt sóng chở người ra khơi chinh phục đại dương mênh mông. Cuộc hành trình bắt đầu với vị mặn của muối biển nơi đầu lưỡi, tiếp sau đó là vị ngọt thanh mát của gió và mây trời tạo nên sự hài hòa tổng thể trong vòm miệng. Hậu vị cay nồng cùng với một chút hơi khói âm ỉ ấm áp tựa như biển cả bao la. Sự kết hợp ấy đã tạo nên một kiệt tác “whisky đại dương xanh” hoàn hảo.',
    size: 'Thể tích: 70 cl / Độ cồn: 57.1%\n' +
        'Bộ sưu tập: Special Release 2018\n' +
        'Thùng ủ: Gỗ sồi già Mỹ và châu Âu\n' +
        'Hương vị: Muối và tảo biển, ngọt thanh của mật ong và trái cây, hậu vị cay kèm mùi khói ấm nóng\n' +
        'Số lượng giới hạn',
  },
  {  // 8
    name: 'GLEN ORD\nYEARS 42 OLD',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo:  imageSingleMalt_GlenOrd_42,
    description: 'Singleton Glen Ord 42 năm tuổi là dòng whisky siêu sang nằm trong bộ sưu tập “The Singleton’s Forgotten Drop” danh giá, với số lượng duy nhất 600 chai trên toàn thế giới. Đây là một trong những phiên bản whisky lâu năm nhất trong lịch sử gần 200 năm của nhà chưng cất Glen Ord. Tuyệt tác whisky này được chế tác từ tâm huyết của bậc thầy pha chế trưởng Maureen Robinson. Ông đã mang đến hơi thở mới cho nhà Glen Ord khi tuyển chọn loại whisky quí hiếm 42 năm tuổi và cho trưởng thành thêm 4 tháng cuối trong hai thùng gỗ sồi Hogshead Mỹ. Rượu được đóng chai đúng với độ mạnh của thùng gỗ ở nồng độ 49,3% ABV, làm nên dư vị ngọt ngào mang đậm dấu ấn từ thùng gỗ sherry Amontillado.',
    size: 'Thể tích: 70 cl / Độ cồn: 49,3%\n' +
        'Whisky mạch nha đơn vùng Highland\n' +
        'Bộ sưu tập: The Singleton’s Forgotten Drop\n' +
        'Thùng ủ: Gỗ sồi hogsheads Mỹ và gỗ sherry Amontillado\n' +
        'Hương vị: Ngọt ngào, chút mặn của muối, the mát, và cay nồng từ gỗ sồi\n' +
        'Chỉ có 600 chai trên toàn thế giới',
  },
  {  // 9
    name: 'GLEN ORD\nYEARS 41 OLD',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_GlenOrd_41,
    description: 'The Singleton Glen Ord 41 năm tuổi cũng là một thành viên danh giá trong bộ sưu tập “The Singleton’s Forgotten Drop series”. Trải qua hơn 4 thập kỉ ủ ròng rã trong những thùng gỗ sồi thượng hạng, Glen Ord 41 năm tuổi đã trở thành một tuyệt tác với những tầng hương vị đa dạng và sâu lắng. Mạnh mẽ táo bạo trong hương và ngọt ngào trong vị, từng giọt vàng ngọc mang đến cảm giác tươi mát và tròn đầy. Với duy nhất 600 chai được tung ra trên toàn thế giới, phiên bản này được đóng chai đúng với độ mạnh của thùng gỗ ở nồng độ 49.9% càng làm nổi bật hương vị tuyệt đỉnh, xứng đáng là một phiên bản độc đáo được chào đón cho những bộ sưu tập whisky đắt giá.',
    size: 'Thể tích: 70 cl / Độ cồn: 49,9%\n' +
        'Whisky mạch nha đơn vùng Highland\n' +
        'Bộ sưu tập: The Singleton’s Forgotten Drop\n' +
        'Thùng ủ: Gỗ sồi châu Mỹ\n' +
        'Hương vị: Vị cam quýt, trái cây tươi, và chút mặn cay và the mát\n' +
        'Chỉ có 600 chai trên toàn thế giới',
  },
  {  // 10
    name: 'GLEN ORD\nYEARS 40 OLD',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_GlenOrd_40,
    description: 'Được giới thiệu trong bộ sưu tập “The Master\'s Casks”, The Singleton Glen Ord 40 năm tuổi có số lượng vô cùng giới hạn chỉ 999 chai trên toàn thế giới. Phiên bản này được chính tay nhà pha chế trưởng Maureen Robinson tác chế. Trong đó, 10 thùng gỗ sồi Mỹ và Châu Âu đã được tuyển chọn gắt gao để ủ dòng whisky hảo hạng này. Đây cũng là phiên bản tiêu biểu cho những yếu tố đã làm nên tên tuổi của nhà The Singleton Glen Ord: Cân bằng, Mượt mà và Hoàn hảo. Với hương thơm tươi mát cùng vị ngọt thanh của cam và mật ong, điểm xuyến chút đắng của sô cô la và cay của tiêu trắng và vị khói, The Singleton Glen Ord 40 năm tuổi đã ghi dấu ấn trong lòng giới mộ điệu whisky mạch nha đơn',
    size: 'Thể tích: 70 cl / Độ cồn: 40%\n' +
        'Whisky mạch nha đơn vùng Highland\n' +
        'Bộ sưu tập: Master\'s Casks\n' +
        'Thùng ủ: Gỗ sồi\n' +
        'Hương vị: Cam, mật ong, sô cô la, tiêu trắng và vị khói\n' +
        'Chỉ có 999 chai trên toàn thế giới',
  },
  {  // 11
    name: 'TALISKER 25 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Talisker_25,
    description: 'Nằm trên bờ Skye - hòn đảo hoang sơ lớn nhất Hebrides, Talisker là nhà máy chưng cất rượu huyền thoại, nơi khai sinh các dòng whisky tên tuổi lẫy lừng. Được mệnh danh là “người con sinh ra từ biển cả” Talisker 25 năm tuổi là món quà dành cho tâm hồn ưa phiêu lưu. Những chiến tích hào hùng cần được tưởng thưởng theo cách hào sảng, vậy thì Talisker chính là lựa chọn tuyệt hảo cho các nhà thám hiểm tài ba. Vị đằm của muối biển được kết hợp hài hòa trong vị ngọt hậu tưởng chừng êm ái, thì bất ngờ vị giác được phiêu du với một cú nổ nhẹ cay - thơm - nồng trong kẽ nứt của hạt tiêu. Nhà thám hiểm sẽ thấy chuyến phiêu lưu kết thúc với một chút đắng sau cùng trong làn khói nhẹ dâng lên sống mũi. Bạn muốn bắt đầu một cuộc viễn chinh? Hãy bắt đầu với một ngụm Talisker.',
    size: 'Thể tích: 70 cl / Độ cồn: 45.8%\n' +
        'Whisky mạch nha đơn vùng Skye\n' +
        'Thùng ủ: <không tìm được info>\n' +
        'Hương vị: Khói nhẹ kèm theo vị ớt đỏ ngai ngái, tiêu thơm nồng.\n' +
        'Ẩn tầng khói là hương nho và mâm xôi.\n' +
        'Số lượng giới hạn',
  },
  {  // 12
    name: 'CAOL ILA 15 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_CaoIla_15,
    description: 'Caol Ila trong tiếng Gaelic nghĩa là Sound Of Islay (Âm thanh của Islay), eo biển hẹp ngăn cách Islay với Jura, là một trong những khu vực hoang sơ, đẹp nhất của bờ biển phía Tây Scotland. Là một trong những dòng whisky mạch nha đơn đắt giá được những người yêu thích whisky trên toàn thế giới đánh giá cao, Caol Ila 15 năm tuổi được tạo tác để hồi sinh một hương vị tuyệt hảo có thể làm mới và kích hoạt mọi giác quan trong bạn. Bạn – trong bầu nhiệt huyết trẻ như đang ghé thăm một hòn đảo huyền diệu. Màu vàng trầm điểm những hạt ánh nhẹ. Mùi nhẹ nhàng ẩn tàng trong vị mạnh mẽ. Khi ngửi sâu bạn thấy mình như chu du cùng những con sóng biển với bạt ngàn trái cây và dấu vết của những trái táo, trái cam mọng trĩu. Bắt đầu với vị ngọt dễ chịu và hơi thuốc lá dịu nhẹ, làm khơi dậy hương khói kéo dài và hoa quả khô. Hậu vị mang đến cảm giác nồng ấm trong sự thăng hoa của hoa hồi, cam thảo, mật ong, vỏ chanh với lớp chocolate đắng nhẹ và vị cay âm ỉ cuối họng',
    size: 'Thể tích: 70 cl / Độ cồn: 59.1%\n' +
        'Whisky mạch nha đơn vùng Islay\n' +
        'Thùng ủ: gỗ sồi Mỹ và Châu Âu\n' +
        'Hương vị: chua nhẹ, kèm chút mặn mà của biển, kèm theo hương vị đa tầng phức hợp của các loại trái cây và lớp vỏ chín mọng cùng vị đắng nhẹ của chocolate.\n' +
        'Số lượng giới hạn',
  },
  {  // 13
    name: 'TEANINICH 17 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Teaninich_17,
    description: 'Teannich 17 năm tuổi lần đầu tiên được Diageo giới thiệu vào năm 2017 để kỷ niệm 200 năm ngày thành lập của nhà chưng cất danh giá đến từ vùng Coastal Highland. Chất rượu vàng nhạt óng ánh ẩn chứa tầng lớp hương vị đa dạng, là miền đất vẫy vùng của những ai thích khám phá hương vị tinh tế của whisky mạch nha đơn. Teaninich 17 năm tuổi cuốn hút người thưởng ngoạn với vị cam quýt bùng nổ, rồi đến vị ngọt ngào của kẹo, lẩn đâu đó là chút cay nồng, mạnh mẽ của hương gỗ sồi, vỏ chanh và kẹo gum. Dư vị nồng ấm với tiêu trắng và vị ngọt thanh còn lại mãi nơi cuống họng. Thưởng thức Teaninich 17 năm tuổi với nước sẽ làm mềm lại vị ngọt của kẹo và nổi bật vị béo ngậy của kẹo toffee, cái ngọt thanh của táo và lê chín.',
    size: 'Thể tích: 70 cl / Độ cồn: 55,9%\n' +
        'Whisky mạch nha đơn vùng Coastal Highland\n' +
        'Bộ sưu tập: Special Release 2017\n' +
        'Thùng ủ: Gỗ sồi châu Mỹ Hogsheads\n' +
        'Hương vị: trái cây tươi, kẹo toffee, gỗ sồi, vỏ chanh, kẹo gum, tiêu trắng\n' +
        'Số lượng giới hạn',
  },
  {  // 14
    name: 'INCHGOWER 27 NĂM TUỔI\nPHIÊN BẢN ĐẶC BIỆT 2018',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Inchgower_27,
    description: 'Được ủ 27 năm trong những thùng gỗ sồi Mỹ chất lượng tại phía Bắc Scotland, Inchgower 27 năm tuổi mang trong mình hơi thở biển cả. Ở lần ra mắt trong bộ sưu tập Special Release 2018, chỉ có 8.544 chai trên toàn thế giới. Với một ngụm Inchgower 27 năm tuổi, bạn sẽ cảm nhận được hương vị trái cây chín mọng bùng nổ, đan xen vị mạch nha và hạt dẻ đặc trưng, len lỏi giữa những tràng cảm xúc đó là chút cay nồng tinh tế nhấm nháp nơi đầu lưỡi, ngọt ngào mà day dứt, quyến rũ mà sống động lạ thường. Chính những cung bậc hương vị này đã khiến tuyệt phẩm whisky được mệnh danh là “Manzanilla xứ Speyside”.',
    size: 'Thể tích: 70 cl / Độ cồn: 55.3%\n' +
        'Scotch whisky mạch nha đơn vùng Speyside\n' +
        'Thùng ủ: Gỗ sồi Mỹ\n' +
        'Bộ sưu tập Special Release 2018\n' +
        'Hương vị: Trái cây nhiệt đới, pha hương thơm nhẹ từ hạt dẻ, chút ngọt từ mật ong, hậu vị cay nồng.\n' +
        'Chỉ có 8544 chai trên toàn thế giới',
  },
  {  // 15
    name: 'OBAN 21 NĂM TUỔI\nPHIÊN BẢN ĐẶC BIỆT 2018',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Oban_21,
    description: 'Oban 21 năm tuổi là 1 trong 3 loại whisky giới hạn được sản xuất từ xưởng chưng cất Oban. Được ủ từ 100% lúa mạch lâu năm trong những thùng gỗ sồi Châu Âu với hàm lượng tannin cao, Oban 21 năm tuổi có vị đắng, cay nồng đặc trưng không lẫn vào đâu được. Hương vị đa tầng từ mạch nha, trái cây, than bùn và cả chút hơi thở của biển trời nơi đầu lưỡi, mang đến cảm giác tê dại, kích thích tột cùng. Oban 21 năm tuổi chắc chắn sẽ là món quà tuyệt vời cho những tâm hồn tài ba, mê phiêu lưu, thích khám phá và khát khao chinh phục.',
    size: 'Thể tích: 70 cl / Độ cồn: 57.9%\n' +
        'Scotch whisky mạch nha đơn vùng Highland\n' +
        'Thùng ủ: Gỗ sồi Châu Âu\n' +
        'Bộ sưu tập: Special Release 2018\n' +
        'Hương vị: Vị trái cây, mạch nha ngọt, cùng chút đằm mặn nơi đầu lưỡi, hậy vị cay nồng.\n' +
        'Số lượng giới hạn',
  },
  {  // 16
    name: 'PITTYVAICH 28 NĂM TUỔI\nPHIÊN BẢN ĐẶC BIỆT 2018',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Pittyvaich,
    description: 'Pittyvaich 28 năm tuổi là một trong những loại whisky hiếm nhất hiện nay chỉ 4.680 chai được phân phối trên toàn thế giới, bởi vào năm 1993, nhà máy chưng cất đã đóng cửa. Việc thưởng thức Pittyvaich 28 năm tuổi đòi hỏi sự kiên nhẫn nhất định của những kẻ trót yêu loại rượu mạch nha này. Bởi lẽ phải mất một ít thời gian để từng nốt hương vị tuyệt vời của Pittyvaich 28 bùng nổ và lan toả. Kết cấu nhẹ nuông chiều làn môi, vị ngọt ngào của mật ong quyện vào sự the mát đến từ vỏ chanh và bạc hà tươi, phối hợp cùng tầng hương đa sắc của trái cây chín mọng, gỗ sồi, hạnh nhân, vani đưa vị giác đến hành trình chu du khắp thiên đường để rồi kết thúc mạnh mẽ bằng một cú nổ cay nhẹ, thơm nồng từ hạt tiêu.',
    size: 'Thể tích: 70 cl / Độ cồn: 57.9%\n' +
        'Scotch whisky mạch nha đơn vùng Highland\n' +
        'Thùng ủ: Gỗ sồi Châu Âu\n' +
        'Bộ sưu tập: Special Release 2018\n' +
        'Hương vị: Vị trái cây, mạch nha ngọt, cùng chút đằm mặn nơi đầu lưỡi, hậy vị cay nồng.\n' +
        'Số lượng giới hạn',
  },
  {  // 17
    name: 'LINKWOOD 1978 37 NĂM TUỔI\nPHIÊN BẢN ĐẶC BIỆT 2016',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Linkwood_37,
    description: 'Linkwood 37 năm tuổi đến từ Speyside, mang trong mình hương hoa cỏ và trái cây tươi chín mọng đặc trưng của dòng rượu mạch nha đơn sinh ra tại Scotland. Được ủ trong những thùng gỗ sồi Mỹ quý hiếm Linkwood 37 năm tuổi tạo ra chất rượu tinh tuý nhưng vô cùng dễ gần khiến cho bất cứ ai cũng sẵn sàng mê đắm chỉ với ngụm đầu tiên. Nhấp một ngụm Linkwood 37 năm tuổi và để hương vị lan nhẹ trong khoang miệng, êm ái trôi xuống rồi kết thúc bằng vị mạch nha tinh tế, đó sẽ là một trải nghiệm quyến rũ, đưa vị giác thăng hoa đến vô tận. Đặc biệt, ở Phiên Bản Giới Hạn 2016, chỉ 6.114 chai được phân phối trên toàn thế giới. Chính điều này lại khiến việc sở hữu Linkwood 37 năm tuổi trở thành một niềm kiêu hãnh cho giới mộ đạo whisky.',
    size: 'Thể tích: 70 cl / Độ cồn: 50.3%\n' +
        'Scotch whisky mạch nha đơn vùng Speyside\n' +
        'Thùng ủ: Gỗ sồi Mỹ\n' +
        'Bộ sưu tập: Special Release 2016\n' +
        'Hương vị: Hương cỏ hoa, mạch nha và trái cây chín mọng\n' +
        'Chỉ có 6.114 chai trên toàn thế giới',
  },
  {  // 18
    name: 'PORT ELLEN 39 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_PortEllen_39,
    description: 'Port Ellen 39 năm tuổi nổi danh và thật sự thu hút những ai trót yêu rượu mạch nha đơn bởi đây được cho là loại Port Ellen lâu đời nhất và tốt nhất từng được sản xuất. Với sự cân bằng hoàn hảo của các nốt hương trái cây tươi chín mọng, hoà quyện chút the mát từ cam quýt, sự ngọt ngào từ mật ong, đan xen vào vị khói mượt mà, hương than bùn đặc trưng cùng gỗ sồi êm dịu, chỉ một ngụm Port Ellen 39 năm tuổi sẽ sẵn sàng đắm chìm bất cứ ai vào thế giới sống động, đa tầng hương vị đầy quyến rũ ấy. Port Ellen 39 năm tuổi – huyền thoại rượu mạch nha đơn đến từ xứ Islay – sự lựa chọn đậm đà, quyết liệt cho những cá tính mạnh mẽ, hoang dại nhưng không kém phần lãng mạn.',
    size: 'Thể tích: 70 cl / Độ cồn: 50.9%\n' +
        'Scotch whisky mạc nha đơn vùng Islay\n' +
        'Thùng ủ: Gỗ sồi Châu Âu\n' +
        'Bộ sưu tập: Special Release 2016\n' +
        'Hương vị: Hương cam quýt, mật ong, chocolate trắng cùng chút đằm khói và than bùn',
  },
  {  // 19
    name: 'CLYNELISH SELECT RESERVE 2ND\nEDITION SPECIAL RELEASES 2015',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Clynelish_2015,
    description: 'Port Ellen 39 năm tuổi nổi danh và thật sự thu hút những ai trót yêu rượu mạch nha đơn bởi đây được cho là loại Port Ellen lâu đời nhất và tốt nhất từng được sản xuất. Với sự cân bằng hoàn hảo của các nốt hương trái cây tươi chín mọng, hoà quyện chút the mát từ cam quýt, sự ngọt ngào từ mật ong, đan xen vào vị khói mượt mà, hương than bùn đặc trưng cùng gỗ sồi êm dịu, chỉ một ngụm Port Ellen 39 năm tuổi sẽ sẵn sàng đắm chìm bất cứ ai vào thế giới sống động, đa tầng hương vị đầy quyến rũ ấy. Port Ellen 39 năm tuổi – huyền thoại rượu mạch nha đơn đến từ xứ Islay – sự lựa chọn đậm đà, quyết liệt cho những cá tính mạnh mẽ, hoang dại nhưng không kém phần lãng mạn.',
    size: 'Thể tích: 70cl/Độ cồn: 56.1%\n' +
        'Whisky mạch nha đơn vùng Highland\n' +
        'Bộ sưu tập: Special Release 2015\n' +
        'Thùng ủ: Gỗ sồi Mỹ và sherry châu Âu\n' +
        'Hương vị: Vị ngọt trái cây thơm mát, hậu vị cay mặn',
  },
  {  // 20
    name: 'TALISKER 15 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Talisker_15,
    description: 'Xuất hiện trong bộ sưu tập “Diageo’s Special Releases 2019”, Talisker 15 năm tuổi với số lượng giới hạn lần đầu tiên ra mắt toàn thế giới vào đầu thu năm nay. Talisker được chính nhà văn lừng danh Robert Louis Stevenson mệnh danh là “King o’ drink” khi ông đưa nó vào bài thơ “The Scotsman’s Return from Abroad” nhằm bày tỏ niềm đam mê của mình với loại rượu quý giá. Điểm đặc biệt mà Talisker mang tới chính là sự kết hợp hài hoà giữa con người với tự nhiên. Được chưng cất trong thùng gỗ sồi châu Mỹ cùng sự luân chuyển bốn mùa trong 15 năm tại hòn đảo Skye, Talisker 15 năm tuổi mang đến một hương vị nồng nàn đầy bất ngờ. Cuộc phiêu liêu của vị giác ví như cuộc ra khơi của những con tàu, khởi đầu êm ái với vị ngọt ngào nơi đầu lưỡi rồi đột nhiên bừng gắt với vị hăng nồng, để lại dư âm sau cuộc hành trình là vị cay âm ỉ dâng lên sóng mũi',
    size: 'Thể tích: 70 cl/ Độ cồn: 57.3%\n' +
        'Scotch whisky mạch nha đơn đảo Skye\n' +
        'Bộ sưu tập: Special Release 2019\n' +
        'Thùng ủ: Gỗ sồi châu Mỹ\n' +
        'Hương vị: Vị đằm của muối và tảo biển, hậu vị cay nồng\n' +
        'Số lượng giới hạn',
  },
  {  // 21
    name: 'CRAGGANMORE 12 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Cragganmore_12,
    description: 'Cragganmore gây ấn tượng với hương vị đa tầng phức tạp gần như không có đối thủ trong dòng whisky mạch nha đơn. Hương thơm thanh tao, nhẹ lâng làm ta liên tưởng đến những chú chim cú dang cánh trên bầu trời Speyside, vốn là biểu tượng của Cragganmore. Cragganmore 12 năm tuổi êm dịu gần như mềm mại đến từ vùng Speyside đã góp mặt trong bộ sưu tập đắt giá của Diageo. Ấn tượng đầu tiên trên đầu lưỡi là vị ngọt thanh tao của mật ong phảng phất hương thơm từ gỗ sồi và rồi một làn khói caramel êm dịu len vào đòi hỏi sự tinh tế của người thưởng thức. Tất cả được dệt hài hoà và nhẹ nhàng hoà quyện với nhau mang đến vị độc đáo hoàn hảo. Là loại whisky tuyệt vời đến từ sự giản đơn, Cragganmore khiến người thưởng thức không khỏi mở nắp chai hết lần này đến lần khác.',
    size: 'Thể tích: 70cl / Độ cồn: 58.4%\n' +
        'Whisky mạch nha đơn vùng Speyside\n' +
        'Bộ sưu tập: Special Release 2019\n' +
        'Thùng ủ: Gỗ sồi châu Mỹ\n' +
        'Hương vị: Vị ngọt của mật ong, chua nhẹ từ vỏ cam, hậu vị cay mùi caramel',
  },
  {  // 22
    name: 'CARDHU 14 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Cardhu_14,
    description: 'Được mệnh danh là “nữ hoàng mạch nha đơn vùng Speyside”, Cardhu 14 năm tuổi được ủ trong thùng gỗ dày sherry Amontillado tạo nên vị hăng đậm đà. Nằm trong bộ sưu tập độc đáo “Diageo’s Special Releases 2019” với số lượng rất hạn chế chỉ 4.860 chai trên toàn thế giới. Tên Cardhu xuất xứ từ Carn Dubh trong tiếng Gaelic nghĩa là “Đá Đen” – hàm ý của niềm may mắn và hạnh phúc. Cardhu 14 năm tuổi còn nổi bật nhờ vỏ hộp thanh lịch, hòa vần với màu hổ phách quý phái, mang đến vẻ đẹp tinh tế chỉ có một. Mùi thơm ban đầu của nho, lê và anh đào khiến bạn liên tưởng đến mùa hè mát dịu vùng Đông Bắc Scotland. Từng hương vị trái cây quyện vào nhau hài hoà rồi chảy vào cuống họng mang đến vị thơm dịu tựa như hoa Linh Lan lẫn với một chút kem vani, cuối cùng là vị cay nồng và khô nhưng dễ chịu đọng lại trên lưỡi.',
    size: 'Thể tích: 70 cl / Độ cồn: 55.0% AVB\n' +
        'Scotch whisky mạch nha đơn vùng Speyside\n' +
        'Bộ sưu tập: Special Release 2019\n' +
        'Thùng ủ: Gỗ dày sherry Amontillado\n' +
        'Hương vị: Vị ngọt của trái cây mùa hè, hậu vị cay nồng và khô\n' +
        'Chỉ có 4.864 chai trên toàn thế giới',
  },
  {  // 23
    name: 'LAGAVULIN 12 TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Lagavulin_12,
    description: 'Với nhà máy chưng cất tọa lạc ở vịnh Lagavulin đẹp như tranh và nguồn nước đậm mùi khói than bùn, Lagavulin 12 năm tuổi quả không hổ danh là biểu tượng của whisky mạch nha đơn đến từ đảo Islay. Quá trình chưng cất nghiêm ngặt trong các thùng gỗ Mỹ đã tạo ra một Lagavulin 12 năm tròn vị kích thích mọi giác quan. Bất ngờ đến ngay từ lần nhấp môi đầu tiên với hương khói mạnh và gắt. Mùi khói theo sau đó phảng phất và len lỏi, gợi nhắc về một nhóm lửa than bùn vừa mới tắt. Hậu vị mang đến cảm giác nồng ấm trong vòm miệng, ngọt ngào với hương vị của tảo biển, cùng dư vị khô và sự thăng hoa của khói gỗ. Màu vàng đồng lấp lánh của rượu kết hợp với hình ảnh đại bàng dũng mãnh trên vỏ hộp làm toát lên sự trẻ trung và mãnh liệt của loại whisky hảo hạng, xứng đáng là một phiên bản độc đáo được mong đợi.',
    size: 'Thể tích: 70 cl/ Độ cồn: 56.5%\n' +
        'Whisky mạch nha đơn vùng Islay\n' +
        'Bộ sưu tập: Special Release 2019\n' +
        'Thùng ủ: Gỗ sồi Mỹ truyền thống\n' +
        'Hương vị: Muối và tảo biển, đậm mùi khói than bùn, lan tỏa và ấm nóng\n' +
        'Số lượng giới hạn',
  },
  {  // 24
    name: 'PITTYVAICH 29 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_PittyVaich_29,
    description: 'Pittyvaich 29 năm tuổi – phiên bản hiếm hoi và lâu đời nhất từ nhà chưng cất “ma” vùng Speyside đã đóng cửa vào năm 1993 (và chỉ hoạt động 18 năm). Nhờ thời gian chưng cất kéo dài gần 3 thập kỷ trong các thùng gỗ sherry Pedro Ximénez và Oloroso, Pittyvaich 29 năm tuổi đã giành được nhiều sự chú ý và đánh giá cao khi lần đầu ra mắt trong bộ sưu tập “Diageo’s Special Releases 2019”. Tất cả những yếu tố gộp lại đã mang đến sự chín muồi của whisky mạch nha Pittyvaich không sàng lọc trước khi đóng chai. Ấn tượng đầu tiên là màu vàng cam óng ánh với hương thơm tinh tế nhưng ngọt đậm đà của trái cây và hoa khô, đến từ quá trình ủ tự nhiên. Chậm lại một nhịp, bạn sẽ cảm được vị ngọt của nho vàng cánh gián và đến sau cùng là vị hăng cay của bột gừng đọng lại nơi vòm miệng. Chỉ với 4.976 chai trên thị trường toàn thế giới, Pittyvaich 29 năm tuổi cất lên giai điệu vàng hiếm có.',
    size: 'Thể tích: 70 cl / Độ cồn: 51.4%\n' +
        'Scotch whisky mạch nha đơn vùng Speyside\n' +
        'Bộ sưu tập: Special Release 2019\n' +
        'Thùng ủ: Gỗ sherry Pedro Ximénez và Oloroso\n' +
        'Hương vị: Ngọt đậm đà của trái cây và hoa khô, hậu vị hăng cay của bột gừng\n' +
        'Chỉ có 4.976 chai trên toàn thế giới',
  },
  {  // 25
    name: 'DALWHINNIE 30 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Dalwhinnie_30,
    description: 'Đây là phiên bản lâu đời nhất trong bộ sưu tập đặc biệt của Diageo được ra mắt vào đầu thu 2019. Quá trình lên men kéo dài, được chưng cất trong ba thập kỷ trong những thùng gỗ đã ủ rượu nhiều lần tạo nên mùi khói than bùn, đã mang đến một Dalwhinnie 30 năm tuổi với độ mạnh 54.5% AVB đạt đỉnh cao hoàn hảo. Ấn tượng đầu tiên là hương thơm của hoa quả mùa hè khiến ta liên tưởng ngay đến vùng đồi hoang vu được bao bọc bởi những ngọn núi trùng điệp. Kéo theo sau vị ngọt của hoa thạch thảo và vị đằm của muối biển, được kết hợp hài hòa với mùi khói tan chảy trong vòm miệng. Màu vàng đậm của rượu kết hợp với hoa văn xanh dương trang nhã của vỏ hộp làm tăng thêm vẻ lịch lãm của loại whisky hảo hạng này. Phiên bản Dalwhinnie 30 năm tuổi chỉ có 7.586 chai được phân phối trên toàn thế giới.',
    size: 'Thể tích: 70 cl / Độ cồn: 54.7%\n' +
        'Scotch whisky mạch nha đơn vùng Highland\n' +
        'Bộ sưu tập: Special Release 2019\n' +
        'Thùng ủ: Gỗ đã ủ nhiều lần tạo mùi khói than bùn cao\n' +
        'Hương vị: Vị ngọt của thạch thảo, vị đằm từ muối biển, mùi khói hài hoà ở hậu vị\n' +
        'Chỉ có 7.586 chai trên toàn thế giới',
  },
  {  // 26
    name: 'MORTLACH 26 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_Mortlach_26,
    description: 'Được ví như “Quái kiệt vùng Dufftown” nhờ vỏ chai cứng cáp và góc cạnh, cùng màu nâu sẫm nam tính và lịch lãm, Mortlach là ẩn số gây tò mò nhất trong các dòng sản phẩm Scotch whisky. Nằm trong những thùng gỗ Pedro Ximenez và Oloroso dùng để ủ rượu lần đầu, Mortlach là kết quả của quy trình chưng cất "2.81" vô cùng độc đáo. Sự bí ẩn và ngạo mạn của gã quái kiệt đến trước tiên từ mùi của sồi già, được phủ bởi một lớp mỏng vị kẹo toffee và hạt cà phê, và ngoài cùng là mùi quả cây mận tía, giúp Mortlach vừa có mùi thanh, vừa hăng và khô đầy lôi cuốn. Mùi hăng cay sau cùng, cộng với vị đậm đà của hoa quả, tạo nên một hậu vị thanh tao kéo dài. Phiên bản đặc biệt hiếm này chỉ có 3.883 chai được phân phối trên khắp thế giới.',
    size: 'Thể tích: 70 cl / Độ cồn: 53.3%\n' +
        'Scotch whisky mạch nha đơn vùng Speyside\n' +
        'Bộ sưu tập: Special Release 2019\n' +
        'Thùng ủ: Gỗ Pedro Ximenez và Oloroso\n' +
        'Hương vị: Kẹo toffee, hạt cà phê và hoa quả ngọt đậm đà, hậu vị thanh kéo dài\n' +
        'Chỉ có 3.883 chai trên toàn thế giới',
  },
  {  // 27
    name: 'THE SINGLETON OF GLEN ORD\n18 NĂM TUỔI',
    type: 'SINGLE MALT',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageSingleMalt_SingletonOfGlenOrd_18,
    description: 'The Singleton of Glen Ord được biết đến với hương vị cân bằng tuyệt hảo, êm mượt và phong phú, được ví như sức sống mạnh mẽ của những chú cá hồi bơi ngược dòng nước vùng Highland xứ sở Scotland. Là sự kết hợp hoàn hảo của dòng nước tinh khiết, nguồn nguyên liệu yến mạch từ vùng Highland trứ danh, và kĩ thuật chưng cất chậm độc đáo, The Singleton of Glen Ord 18 năm tuổi đã dành nhiều giải thưởng quốc tế danh giá. Trưởng thành ít nhất 18 năm trong những thùng gỗ sồi Hogsheads châu Mỹ, nét đặc trưng của Glen Ord nay được điểm xuyến thêm chút táo bạo trong hương vị. Chất rượu đậm đà, dậy vị trái cây, cam quýt mát lạnh và nét ngọt ngào của kẹo sô cô la cùng dư vị cay nồng lưu luyến ở cuống họng. Một lần nữa, với hương vị tuyệt hảo này, những nhà pha chế bậc thầy của Singleton đã khẳng định: không có khái niệm uống single malt, single malt là để thưởng thức.',
    size: 'Thể tích: 70 cl / Độ cồn: 55%\n' +
        'Scotch whisky mạch nha đơn vùng Highland\n' +
        'Bộ sưu tập: Special Release 2019\n' +
        'Thùng ủ: Gỗ sồi châu Mỹ Hogsheads\n' +
        'Hương vị: Kẹo bơ cứng ngọt, chua nhẹ từ vỏ cam, hậu vị cay âm ỉ\n' +
        'Số lượng giới hạn',
  },
];
